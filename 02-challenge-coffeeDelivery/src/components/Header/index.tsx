import { HeaderContainer } from "./styles";
import Logo from '../../assets/logo.svg'
import {  MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function Header(){
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

        <NavLink to="/checkout">
          <ShoppingCart weight="fill" size={22} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}