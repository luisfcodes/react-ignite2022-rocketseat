import { CardContainer } from "./styles";

import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { CoffeeList } from "../..";

export function CoffeeCard({ title, subtitle, price, image, tags } : CoffeeList) {
  return (
    <CardContainer>
      <img src={`src/assets/${image}`} alt="" />
      <div className="tags">
        {
          tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))
        }
      </div>
      <h3>{ title }</h3>
      <span className="subtitle">{ subtitle }</span>

      <div className="actions">
        <span className="currency">R$</span><span className="price">{ price }</span>

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