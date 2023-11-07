import { HeaderContainer } from "./styles"

import { MapPin, ShoppingCart } from "@phosphor-icons/react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import logoImg from "../../assets/logo.svg"
import { CoffeesContext } from "../../contexts/CoffeesContext"

export function Header() {
  const { coffeeSelectedList } = useContext(CoffeesContext)

  const quantityOfProducts = coffeeSelectedList.length

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
            {quantityOfProducts ? <span>{quantityOfProducts}</span> : null}
            <ShoppingCart weight="fill" size={22} />
          </button>
        </Link>
      </div>
    </HeaderContainer>
  )
}
