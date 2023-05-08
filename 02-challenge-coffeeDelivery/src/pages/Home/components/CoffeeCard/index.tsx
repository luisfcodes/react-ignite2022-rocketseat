import { CardContainer } from "./styles";

import { ShoppingCartSimple } from "@phosphor-icons/react";
import { CoffeeList } from "../..";
import { ButtonAmount } from "../../../../components/ButtonAmount";

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
          <ButtonAmount height={38}/>
          <button className="buy-button">
            <ShoppingCartSimple size={22} weight="fill"/>
          </button>
        </div>
      </div>
    </CardContainer>
  )
}