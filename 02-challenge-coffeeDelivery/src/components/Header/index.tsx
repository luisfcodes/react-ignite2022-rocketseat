import { HeaderContainer } from "./styles";
import Logo from '../../assets/logo.svg'
import {  MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

export function Header(){

  const { coffeeCartList } = useContext(CoffeeContext)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>

      <nav>
        <a href="#">
          <MapPin weight="fill" size={22}/>
          <span>Porto Alegre, RS</span>
        </a>

        <NavLink to="/checkout" className="counter">
          { coffeeCartList.length > 0 && <span>{ coffeeCartList.length }</span> }
          <ShoppingCart weight="fill" size={22} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}