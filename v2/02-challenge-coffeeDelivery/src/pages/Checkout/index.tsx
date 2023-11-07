import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "@phosphor-icons/react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CoffeeSelected } from "../../components/Coffee-Selected"
import { CoffeesContext } from "../../contexts/CoffeesContext"
import { formatCurrency } from "../../utils/formatCurrency"
import {
  Header,
  OrderSummary,
  PersonalData,
  Wrapper,
} from "../styles/Checkout/styles"

export function Checkout() {
  const { coffeeSelectedList } = useContext(CoffeesContext)

  const totalPrice = coffeeSelectedList.reduce((acc, coffee) => {
    return acc + coffee.amount * coffee.price
  }, 0)

  const totalPriceFormatted = formatCurrency(totalPrice)

  const deliveryValue = coffeeSelectedList.length ? 3.5 : 0
  const deliveryValueFormatted = formatCurrency(deliveryValue)

  const totalOrder = totalPrice + deliveryValue
  const totalOrderFormatted = formatCurrency(totalOrder)

  return (
    <Wrapper>
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
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />

            <div className="number-complement">
              <input type="number" placeholder="Número" />
              <div>
                <input type="text" placeholder="Complemento" />
              </div>
            </div>

            <div className="neighborhood-city-uf">
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
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
            <div>
              <CreditCard weight="regular" size={16} />
              <span>Cartão de Crédito</span>
            </div>

            <div>
              <Bank weight="regular" size={16} />
              <span>Cartão de Débito</span>
            </div>

            <div>
              <Money weight="regular" size={16} />
              <span>Dinheiro</span>
            </div>
          </div>
        </div>
      </PersonalData>

      <OrderSummary>
        <h2>Cafés selecionados</h2>

        <div className="summary">
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

          <button className="btn-submit">
            <Link to="/success">Confirmar Pedido</Link>
          </button>
        </div>
      </OrderSummary>
    </Wrapper>
  )
}
