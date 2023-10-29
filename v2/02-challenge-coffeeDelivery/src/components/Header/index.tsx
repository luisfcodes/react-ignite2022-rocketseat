import { HeaderContainer } from "./styles";

import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />

      <div>
        <button className="location">
          <MapPin weight="fill" size={22} />
          <span>Porto Alegre, RS</span>
        </button>
        <button className="cart">
          <ShoppingCart weight="fill" size={22} />
        </button>
      </div>
    </HeaderContainer>
  )
}
