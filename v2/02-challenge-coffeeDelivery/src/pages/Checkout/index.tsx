import { zodResolver } from "@hookform/resolvers/zod"
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "@phosphor-icons/react"
import { useContext, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import * as z from "zod"
import { CoffeeSelected } from "../../components/Coffee-Selected"
import { CoffeesContext } from "../../contexts/CoffeesContext"
import { formatCurrency } from "../../utils/formatCurrency"
import {
  FormWrapper,
  Header,
  OrderSummary,
  PersonalData,
} from "../styles/Checkout/styles"

const zodSchema = z.object({
  cep: z.string().min(8, { message: "CEP deve conter 8 caracteres" }),
  street: z.string().min(1, { message: "Rua é obrigatória" }),
  number: z.string().min(1, { message: "Número é obrigatório" }),
  complement: z.string(),
  neighborhood: z.string().min(1, { message: "Bairro é obrigatório" }),
  city: z.string().min(1, { message: "Cidade é obrigatória" }),
  uf: z.string().min(1, { message: "UF é obrigatória" }),
  methodPayment: z
    .enum(["credit_card", "debit_card", "money"])
    .refine((data) => data !== undefined, {
      message: "Selecione uma forma de pagamento",
    }),
})

export type FormData = z.infer<typeof zodSchema>

export function Checkout() {
  const { coffeeSelectedList } = useContext(CoffeesContext)
  const [emptyCart, setEmptyCart] = useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(zodSchema),
    defaultValues: {
      methodPayment: "credit_card",
    },
  })

  const totalPrice = coffeeSelectedList.reduce((acc, coffee) => {
    return acc + coffee.amount * coffee.price
  }, 0)

  const totalPriceFormatted = formatCurrency(totalPrice)

  const deliveryValue = coffeeSelectedList.length ? 3.5 : 0
  const deliveryValueFormatted = formatCurrency(deliveryValue)

  const totalOrder = totalPrice + deliveryValue
  const totalOrderFormatted = formatCurrency(totalOrder)

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (coffeeSelectedList.length) {
      localStorage.setItem("@coffee-delivery/order", JSON.stringify(data))

      navigate("/success")
    } else {
      setEmptyCart(true)

      setTimeout(() => {
        setEmptyCart(false)
      }, 2000)
    }
  }

  const watchMethodPayment = watch("methodPayment")

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <PersonalData>
        <h2>Complete seu pedido</h2>

        <div className="address">
          <Header>
            <MapPin weight="regular" size={22} />
            <div>
              <h3>Endereço de Entrega</h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </Header>

          <div className="form">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="CEP"
                {...register("cep")}
                maxLength={8}
              />
              {errors.cep && <p>{errors.cep.message}</p>}
            </div>

            <div className="input-wrapper">
              <input type="text" placeholder="Rua" {...register("street")} />
              {errors.street && <p>{errors.street.message}</p>}
            </div>

            <div className="number-complement">
              <div className="input-wrapper">
                <input
                  type="number"
                  placeholder="Número"
                  {...register("number")}
                />
                {errors.number && <p>{errors.number.message}</p>}
              </div>
              <div className="complement">
                <input
                  type="text"
                  placeholder="Complemento"
                  {...register("complement")}
                />
              </div>
            </div>

            <div className="neighborhood-city-uf">
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Bairro"
                  {...register("neighborhood")}
                />
                {errors.neighborhood && <p>{errors.neighborhood.message}</p>}
              </div>

              <div className="input-wrapper city">
                <input type="text" placeholder="Cidade" {...register("city")} />
                {errors.city && <p>{errors.city.message}</p>}
              </div>

              <div className="input-wrapper">
                <input type="text" placeholder="UF" {...register("uf")} />
                {errors.uf && <p>{errors.uf.message}</p>}
              </div>
            </div>
          </div>
        </div>

        <div className="payment-methods">
          <Header>
            <CurrencyDollar weight="regular" size={22} />
            <div>
              <h3>Pagamento</h3>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </Header>

          <div className="cards">
            <label
              htmlFor="credit_card"
              className={watchMethodPayment === "credit_card" ? "selected" : ""}
            >
              <input
                type="radio"
                id="credit_card"
                value="credit_card"
                {...register("methodPayment")}
              />
              <CreditCard weight="regular" size={16} />
              <span>Cartão de Crédito</span>
            </label>

            <label
              htmlFor="debit_card"
              className={watchMethodPayment === "debit_card" ? "selected" : ""}
            >
              <input
                type="radio"
                id="debit_card"
                value="debit_card"
                {...register("methodPayment")}
              />
              <Bank weight="regular" size={16} />
              <span>Cartão de Débito</span>
            </label>

            <label
              htmlFor="money"
              className={watchMethodPayment === "money" ? "selected" : ""}
            >
              <input
                type="radio"
                id="money"
                value="money"
                {...register("methodPayment")}
              />
              <Money weight="regular" size={16} />
              <span>Dinheiro</span>
            </label>

            {errors.methodPayment && <p>{errors.methodPayment.message}</p>}
          </div>
        </div>
      </PersonalData>

      <OrderSummary>
        <h2>Cafés selecionados</h2>

        <div className="summary">
          {emptyCart && <p className="emptyCart">Seu carrinho está vazio</p>}

          {coffeeSelectedList.map(({ amount, imgUrl, name, price }) => (
            <CoffeeSelected
              key={name}
              amount={amount}
              imgUrl={imgUrl}
              name={name}
              price={price}
            />
          ))}

          <div className="subtotal">
            <div>
              <span>Total de itens</span>
              <span>{totalPriceFormatted}</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>{deliveryValueFormatted}</span>
            </div>

            <div>
              <span>Total</span>
              <span>{totalOrderFormatted}</span>
            </div>
          </div>

          <button className="btn-submit">Confirmar Pedido</button>
        </div>
      </OrderSummary>
    </FormWrapper>
  )
}
