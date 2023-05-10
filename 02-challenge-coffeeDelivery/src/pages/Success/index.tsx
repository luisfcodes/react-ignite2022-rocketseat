import { Item, SuccessContainer } from "./styles";
import Illustration from '../../assets/Illustration.png'
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <section>
        <div className="order-information-wrapper">
          <div className="order-information">
            <div className="order-information-group">
              <Item color="purple">
                <MapPin weight="fill" size={16}/>
              </Item>
              <div>
                <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></span>
                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </div>

            <div className="order-information-group">
              <Item color="yellow">
                <Timer weight="fill" size={16}/>
              </Item>
              <div>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div className="order-information-group">
              <Item color="yellow-dark">
                <CurrencyDollar size={16}/>
              </Item>
              <div>
                <span>Pagamento na entrega</span>
                <strong>Cartão de Crédito</strong>
              </div>
            </div>
          </div>
        </div>

        <img src={Illustration} alt="Imagem de um homem com camiseta amarela e casça verde em cima de uma moto roxa, transportando uma encomenda" />
      </section>
    </SuccessContainer>
  )
}