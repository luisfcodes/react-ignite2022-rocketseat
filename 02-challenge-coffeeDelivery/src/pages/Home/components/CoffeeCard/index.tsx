import { CardContainer } from "./styles";

import { ShoppingCartSimple } from "@phosphor-icons/react";

import { ButtonAmount } from "../../../../components/ButtonAmount";
import { CoffeeList } from "../../../../contexts/CoffeeContext";
import { NavLink } from "react-router-dom";

export function CoffeeCard({ title, subtitle, price, image, tags, amount } : CoffeeList) {
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
        <span className="currency">R$</span><span className="price">{ price.toFixed(2).replace(".", ",") }</span>

        <div className="actions-buttons">
          <ButtonAmount height={38} amount={amount} coffeeTitle={ title }/>
          <NavLink className="buy-button" to="/checkout">
            <ShoppingCartSimple size={22} weight="fill"/>
          </NavLink>
        </div>
      </div>
    </CardContainer>
  )
}