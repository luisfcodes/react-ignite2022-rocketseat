import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react"
import IllustrationImg from "../../assets/illustration.png"
import { FormData } from "../Checkout"
import { Wrapper } from "../styles/Success/styles"

export function Success() {
  const {
    street,
    number,
    neighborhood,
    city,
    uf,
    methodPayment,
    complement,
  }: FormData = JSON.parse(
    localStorage.getItem("@coffee-delivery/order") || "null",
  )

  enum MethodPayment {
    credit_card = "Cartão de Crédito",
    debit_card = "Cartão de Débito",
    money = "Dinheiro",
  }

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
                  <span className="bold">
                    {street}, {number}
                  </span>
                </p>
                {complement && <p>{complement}</p>}
                <p>
                  {neighborhood} - {city}, {uf}
                </p>
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
                <p className="bold">{MethodPayment[methodPayment]}</p>
              </div>
            </div>
          </div>
        </div>
        <img src={IllustrationImg} alt="" />
      </div>
    </Wrapper>
  )
}
