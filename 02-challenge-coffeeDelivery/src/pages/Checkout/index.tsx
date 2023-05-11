import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "@phosphor-icons/react";
import { CheckoutContainer, Divider } from "./styles";
import { ButtonAmount } from "../../components/ButtonAmount";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

export function Checkout() {
  const { coffeeCartList, updateCoffeeAmount } = useContext(CoffeeContext)

  const totalPrice = coffeeCartList.reduce((acc, current) => {
    return acc + (current.amount * current.price)
  }, 0)

  const deliveryCost = totalPrice === 0 ? 0 : totalPrice < 50 ? 5 : 2.5 

  function formatNumberForCurrency(number: number){
    return number.toFixed(2).replace(".", ",")
  }

  function handleRemoveCoffee(coffeeTitle: string){
    updateCoffeeAmount(coffeeTitle, 0)
  }

  return (
    <CheckoutContainer>
      <section className="order-form">
        <h2>Complete seu pedido</h2>

        <div className="container">
          <div className="title">
            <MapPinLine size={22} className="map-icon" />
            <div>
              <h3>Endereço de Entrega</h3>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>

          <form>
            <input type="text" placeholder="CEP" className="inputWidth" />
            <input type="text" placeholder="Rua" />

            <div>
              <input type="number" placeholder="Número" className="inputWidth" />
              <div className="inputComplement">
                <input type="text" placeholder="Complemento" />
                <label>Opcional</label>
              </div>
            </div>

            <div>
              <input type="text" placeholder="Bairro" className="inputWidth" />
              <input type="text" placeholder="Cidade" className="inputCity" />
              <input type="text" placeholder="UF" className="inputUF" />
            </div>
          </form>
        </div>

        <div className="container">
          <div className="title">
            <CurrencyDollar size={22} className="currency-icon" />
            <div>
              <h3>Pagamento</h3>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
          </div>

          <div className="payment-methods">
            <button>
              <CreditCard size={16} />
              <span>Cartão de Crédito</span>
            </button>

            <button>
              <Bank size={16} />
              <span>Cartão de Débito</span>
            </button>

            <button>
              <Money size={16} />
              <span>Dinheiro</span>
            </button>
          </div>
        </div>
      </section>

      <section>
        <h2>Cafés selecionados</h2>

        <div className="container coffee-selected-container">

          {coffeeCartList.map(coffee => (
            <div key={coffee.title}>
              <div className="coffee-selected">
                <img src={`src/assets/${coffee.image}`} alt="" />
                <div className="actions">
                  <span className="title">{ coffee.title }</span>
                  <div className="actions-buttons">
                    <ButtonAmount height={32} amount={coffee.amount} coffeeTitle={coffee.title} />
                    <button className="remove-button" onClick={() => handleRemoveCoffee(coffee.title)}>
                      <Trash size={16} />
                      <span>Remover</span>
                    </button>
                  </div>
                </div>
                <span className="price">R$ { formatNumberForCurrency(coffee.price * coffee.amount) }</span>
              </div>
              <Divider />
            </div>
          ))}


          <div className="final-price">
            <div>
              <span className="title">Total de itens</span>
              <span className="price">R$ { formatNumberForCurrency(totalPrice) }</span>
            </div>
            <div>
              <span className="title">Entrega</span>
              <span className="price">R$ { formatNumberForCurrency(deliveryCost) }</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>R$ { formatNumberForCurrency(totalPrice + deliveryCost) }</span>
            </div>
          </div>
          <button className="button-confirm">Confirmar Pedido</button>
        </div>
      </section>
    </CheckoutContainer>
  )
}