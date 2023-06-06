import Image from "next/image";
import Link from "next/link";

import logoImg from '../../assets/logo.svg';
import { HeaderContainer } from "./styles";
import { Handbag } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt='' />
      </Link>

      <button>
        <Handbag size={24} weight="bold"/>
      </button>
    </HeaderContainer>
  )
}