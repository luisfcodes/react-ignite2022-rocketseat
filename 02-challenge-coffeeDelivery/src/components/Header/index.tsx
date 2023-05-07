import { HeaderContainer } from "./styles";
import Logo from '../../assets/logo.svg'
import {  MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header(){
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

      <nav>
        <a href="#">
          <MapPin weight="fill" size={22}/>
          <span>Porto Alegre, RS</span>
        </a>

        <a href="#">
          <ShoppingCart weight="fill" size={22} />
        </a>
      </nav>
    </HeaderContainer>
  )
}