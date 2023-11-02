import { HeaderContainer } from "./styles"

import { MapPin, ShoppingCart } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import logoImg from "../../assets/logo.svg"

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoImg} alt="" />
      </Link>

      <div>
        <button className="location">
          <MapPin weight="fill" size={22} />
          <span>Porto Alegre, RS</span>
        </button>
        <Link to="checkout">
          <button className="cart">
            <ShoppingCart weight="fill" size={22} />
          </button>
        </Link>
      </div>
    </HeaderContainer>
  )
}
