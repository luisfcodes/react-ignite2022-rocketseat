import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react"
import IllustrationImg from "../../assets/illustration.png"
import { Wrapper } from "../styles/Success/styles"

export function Success() {
  return (
    <Wrapper>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div className="content">
        <div className="summary-wrapper">
          <div className="summary">
            <div className="summary-content address">
              <div>
                <MapPin size={16} weight="fill" />
              </div>
              <div>
                <p>
                  Entrega em{" "}
                  <span className="bold">Rua João Daniel Martinelli, 102</span>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </div>

            <div className="summary-content delivery">
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <div>
                <p>Previsão de entrega</p>
                <p className="bold">20 min - 30 min</p>
              </div>
            </div>

            <div className="summary-content payment">
              <div>
                <CurrencyDollar size={16} weight="fill" />
              </div>
              <div>
                <p>Pagamento na entrega</p>
                <p className="bold">Cartão de Crédito</p>
              </div>
            </div>
          </div>
        </div>
        <img src={IllustrationImg} alt="" />
      </div>
    </Wrapper>
  )
}
