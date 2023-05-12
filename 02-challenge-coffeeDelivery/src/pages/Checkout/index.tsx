import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "@phosphor-icons/react";
import { CheckoutContainer, Divider } from "./styles";
import { ButtonAmount } from "../../components/ButtonAmount";
import { useContext, useState } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().length(9, 'CEP inválido'),
  street: zod.string().min(3, 'Informe um endereço válido'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().length(2, 'UF inválida')
})

type checkoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const { coffeeCartList, updateCoffeeAmount } = useContext(CoffeeContext)
  const [ paymentMethods, setPaymentMethods ] = useState<"credit" | "debit" | "money">("credit")
  const { register, handleSubmit, reset } = useForm<checkoutFormData>({
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

  function formatNumberForCurrency(number: number) {
    return number.toFixed(2).replace(".", ",")
  }

  function handleRemoveCoffee(coffeeTitle: string) {
    updateCoffeeAmount(coffeeTitle, 0)
  }

  function handleUpdatePaymentMethod(method: "credit" | "debit" | "money"){
    setPaymentMethods(method)
  }

  function handleSubmitForm(data: checkoutFormData){
    console.log(data)
    reset()
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
              <input 
                placeholder="CEP" 
                className="inputWidth" 
                {...register('cep')} 
              />
              <input 
                placeholder="Rua" 
                {...register('street')}  
              />

              <div>
                <input 
                  type="number" 
                  placeholder="Número" 
                  className="inputWidth"
                  {...register('number')}
                />
                <div className="inputComplement">
                  <input 
                    placeholder="Complemento"
                    {...register('complement')}
                  />
                  <label>Opcional</label>
                </div>
              </div>

              <div>
                <input
                  placeholder="Bairro"
                  className="inputWidth"
                  {...register('district')}
                />
                <input
                  placeholder="Cidade"
                  className="inputCity"
                  {...register('city')}
                />
                <input
                  placeholder="UF"
                  className="inputUF"
                  {...register('uf')}
                />
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

            {coffeeCartList.map(coffee => (
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
            ))}


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