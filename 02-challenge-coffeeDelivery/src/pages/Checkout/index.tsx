import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "@phosphor-icons/react";
import { CheckoutContainer, Divider } from "./styles";
import { ButtonAmount } from "../../components/ButtonAmount";
import { useContext, useState } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { CheckoutContext } from "../../contexts/CheckoutContext";
import { useNavigate } from "react-router-dom";

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().length(9, 'CEP inválido, modelo: XXXXX-XXX'),
  street: zod.string().min(3, 'Informe um endereço válido'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().length(2, 'UF inválida')
})

type checkoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()
  const [coffeeCartListIsEmpty, setCoffeeCartListIsEmpty] = useState(false)
  const { coffeeCartList, updateCoffeeAmount, resetCoffeeCart } = useContext(CoffeeContext)
  const { updateOrder } = useContext(CheckoutContext)
  const [paymentMethods, setPaymentMethods] = useState<"credit" | "debit" | "money">("credit")
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm<checkoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      uf: ''
    }
  })

  const totalPrice = coffeeCartList.reduce((acc, current) => {
    return acc + (current.amount * current.price)
  }, 0)

  const deliveryCost = totalPrice === 0 ? 0 : totalPrice < 50 ? 5 : 2.5

  const complementInput = watch('complement')
  const complementIsEmpty = complementInput

  function formatNumberForCurrency(number: number) {
    return number.toFixed(2).replace(".", ",")
  }

  function handleRemoveCoffee(coffeeTitle: string) {
    updateCoffeeAmount(coffeeTitle, 0)
  }

  function handleUpdatePaymentMethod(method: "credit" | "debit" | "money") {
    setPaymentMethods(method)
  }

  function handleSubmitForm(data: checkoutFormData) {
    if (coffeeCartList.length > 0) {
      updateOrder({
        formData: data,
        paymentMethod: paymentMethods
      })
      reset()
      resetCoffeeCart()
      navigate('/success')
    } else {
      setCoffeeCartListIsEmpty(true)
      setTimeout(() => {
        setCoffeeCartListIsEmpty(false)
      }, 500)
    }
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <section>
          <h2 className="form-title">Complete seu pedido</h2>

          <div className="container">
            <div className="form-header">
              <MapPinLine size={22} className="map-icon" />
              <div>
                <h3>Endereço de Entrega</h3>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </div>

            <div className="form-inputs">
              <div className="form-group-error-message">
                <input
                  placeholder="CEP"
                  className="inputWidth"
                  {...register('cep')}
                />
                {errors.cep && <p>{errors.cep.message}</p>}
              </div>

              <div className="form-group-error-message inputStreet">
                <input
                  placeholder="Rua"
                  {...register('street')}
                />
                {errors.street && <p>{errors.street.message}</p>}
              </div>

              <div className="form-group">
                <div className="form-group-error-message">
                  <input
                    type="number"
                    placeholder="Número"
                    className="inputWidth"
                    {...register('number')}
                  />
                  {errors.number && <p>{errors.number.message}</p>}
                </div>

                <div className="inputComplement">
                  <input
                    placeholder="Complemento"
                    {...register('complement')}
                  />
                  <label className={complementIsEmpty ? 'hidden' : ''}>Opcional</label>
                </div>
              </div>

              <div className="form-group">
                <div className="form-group-error-message">
                  <input
                    placeholder="Bairro"
                    className="inputWidth"
                    {...register('district')}
                  />
                  {errors.district && <p>{errors.district.message}</p>}
                </div>

                <div className="form-group-error-message inputCity">
                  <input
                    placeholder="Cidade"
                    {...register('city')}
                  />
                  {errors.city && <p>{errors.city.message}</p>}
                </div>

                <div className="form-group-error-message">
                  <input
                    placeholder="UF"
                    className="inputUF"
                    {...register('uf')}
                  />
                  {errors.uf && <p>{errors.uf.message}</p>}
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="form-header">
              <CurrencyDollar size={22} className="currency-icon" />
              <div>
                <h3>Pagamento</h3>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
              </div>
            </div>

            <div className="payment-methods">
              <button
                type="button"
                onClick={() => handleUpdatePaymentMethod("credit")}
                className={paymentMethods === 'credit' ? 'method-active' : ''}
              >
                <CreditCard size={16} />
                <span>Cartão de Crédito</span>
              </button>

              <button
                type="button"
                onClick={() => handleUpdatePaymentMethod("debit")}
                className={paymentMethods === 'debit' ? 'method-active' : ''}
              >
                <Bank size={16} />
                <span>Cartão de Débito</span>
              </button>

              <button
                type="button"
                onClick={() => handleUpdatePaymentMethod("money")}
                className={paymentMethods === 'money' ? 'method-active' : ''}
              >
                <Money size={16} />
                <span>Dinheiro</span>
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="form-title">Cafés selecionados</h2>

          <div className="container coffee-selected-container">
            {coffeeCartList.length > 0 ? (
              coffeeCartList.map(coffee => (
                <div key={coffee.title}>
                  <div className="coffee-selected">
                    <img src={`src/assets/${coffee.image}`} alt="" />
                    <div className="actions">
                      <span className="title">{coffee.title}</span>
                      <div className="actions-buttons">
                        <ButtonAmount height={32} amount={coffee.amount} coffeeTitle={coffee.title} />
                        <button type="button" className="remove-button" onClick={() => handleRemoveCoffee(coffee.title)}>
                          <Trash size={16} />
                          <span>Remover</span>
                        </button>
                      </div>
                    </div>
                    <span className="price">R$ {formatNumberForCurrency(coffee.price * coffee.amount)}</span>
                  </div>
                  <Divider />
                </div>
              ))
            ) : (
              <>
                <div className={`${coffeeCartListIsEmpty ? 'coffee-empty-warn' : ''} coffee-empty`}>
                  <span>Selecione um café</span>
                </div>
                <Divider />
              </>
            )}


            <div className="final-price">
              <div>
                <span className="title">Total de itens</span>
                <span className="price">R$ {formatNumberForCurrency(totalPrice)}</span>
              </div>
              <div>
                <span className="title">Entrega</span>
                <span className="price">R$ {formatNumberForCurrency(deliveryCost)}</span>
              </div>
              <div className="total">
                <span>Total</span>
                <span>R$ {formatNumberForCurrency(totalPrice + deliveryCost)}</span>
              </div>
            </div>
            <button className="button-confirm" type="submit">Confirmar Pedido</button>
          </div>
        </section>
      </form>
    </CheckoutContainer>
  )
}