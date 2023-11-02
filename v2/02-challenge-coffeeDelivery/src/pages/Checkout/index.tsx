import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Minus,
  Money,
  Plus,
  Trash,
} from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import {
  Divider,
  Header,
  OrderSummary,
  PersonalData,
  Wrapper,
} from "../styles/Checkout/styles"

export function Checkout() {
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
          <div className="product">
            <img src="src/assets/coffees/latte.png" alt="" />

            <div className="content">
              <span className="name"> Expresso Tradicional</span>

              <div className="buttons-container">
                <div className="buttons-amount">
                  <button>
                    <Minus size={14} weight="bold" />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus weight="bold" size={14} />
                  </button>
                </div>

                <button className="delete-item">
                  <Trash weight="regular" size={16} />
                  <span>Remover</span>
                </button>
              </div>
            </div>

            <span className="price">R$ 9,90</span>
          </div>

          <Divider />

          <div className="product">
            <img src="src/assets/coffees/arabic.png" alt="" />

            <div className="content">
              <span className="name"> Expresso Tradicional</span>

              <div className="buttons-container">
                <div className="buttons-amount">
                  <button>
                    <Minus size={14} weight="bold" />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus weight="bold" size={14} />
                  </button>
                </div>

                <button className="delete-item">
                  <Trash weight="regular" size={16} />
                  <span>Remover</span>
                </button>
              </div>
            </div>

            <span className="price">R$ 9,90</span>
          </div>

          <Divider />

          <div className="subtotal">
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>

            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
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
