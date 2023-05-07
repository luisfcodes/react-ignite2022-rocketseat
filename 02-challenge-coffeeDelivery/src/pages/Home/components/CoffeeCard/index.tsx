import { CardContainer } from "./styles";

import Express from '../../../../assets/Express.png';
import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";

export function CoffeeCard() {
  return (
    <CardContainer>
      <img src={Express} alt="" />
      <span className="tag">Tradicional</span>
      <h3>Expresso Tradicional</h3>
      <span className="subtitle">O tradicional café feito com água quente e grãos moídos</span>

      <div className="actions">
        <span className="currency">R$</span><span className="price">9,90</span>

        <div className="actions-buttons">
          <div className="amount">
            <button>
              <Minus size={14} weight="bold" />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </div>
          <button className="buy-button">
            <ShoppingCartSimple size={22} weight="fill"/>
          </button>
        </div>
      </div>
    </CardContainer>
  )
}