import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "@phosphor-icons/react";
import { CheckoutContainer, Divider } from "./styles";
import { ButtonAmount } from "../../components/ButtonAmount";

export function Checkout() {
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
                <input type="text" placeholder="Complemento"/>
                <label>Opcional</label>
              </div>
            </div>

            <div>
              <input type="text" placeholder="Bairro" className="inputWidth" />
              <input type="text" placeholder="Cidade" className="inputCity"/>
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
              <CreditCard size={16}/>
              <span>Cartão de Crédito</span>
            </button>

            <button>
              <Bank size={16}/>
              <span>Cartão de Débito</span>
            </button>

            <button>
              <Money size={16}/>
              <span>Dinheiro</span>
            </button>
          </div>
        </div>
      </section>

      <section>
        <h2>Cafés selecionados</h2>

        <div className="container coffee-selected-container">
          <div className="coffee-selected">
            <img src="src/assets/Express.png" alt="" />
            <div className="actions">
              <span className="title">Expresso Tradicional</span>
              <div className="actions-buttons">
                <ButtonAmount height={32} />
                <button className="remove-button">
                  <Trash size={16} />
                  <span>Remover</span>
                </button>
              </div>
            </div>
            <span className="price">R$ 9,90</span>
          </div>
          <Divider />
          <div className="coffee-selected">
            <img src="src/assets/Express.png" alt="" />
            <div className="actions">
              <span className="title">Expresso Tradicional</span>
              <div className="actions-buttons">
                <ButtonAmount height={32} />
                <button className="remove-button">
                  <Trash size={16} />
                  <span>Remover</span>
                </button>
              </div>
            </div>
            <span className="price">R$ 9,90</span>
          </div>
          <Divider />
          <div className="final-price">
            <div>
              <span className="title">Total de itens</span>
              <span className="price">R$ 29,70</span>
            </div>
            <div>
              <span className="title">Entrega</span>
              <span className="price">R$ 3,70</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>R$ 38,70</span>
            </div>
          </div>
          <button className="button-confirm">Confirmar Pedido</button>
        </div>
      </section>
    </CheckoutContainer>
  )
}