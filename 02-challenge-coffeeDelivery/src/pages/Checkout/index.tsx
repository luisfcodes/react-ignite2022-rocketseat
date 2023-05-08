import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "@phosphor-icons/react";
import { CheckoutContainer } from "./styles";
import { ButtonAmount } from "../../components/ButtonAmount";

export function Checkout() {
  return (
    <CheckoutContainer>
      <section>
        <h2>Complete seu pedido</h2>

        <div className="container">
          <div className="title">
            <MapPinLine size={22} />
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
              <input type="text" placeholder="Complemento" className="inputComplement" />
            </div>

            <div>
              <input type="text" placeholder="Bairro" className="inputWidth" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" className="inputUF" />
            </div>
          </form>
        </div>

        <div className="container">
          <div className="title">
            <CurrencyDollar size={22} />
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

        <div className="container">
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
          </div>
        </div>
      </section>
    </CheckoutContainer>
  )
}