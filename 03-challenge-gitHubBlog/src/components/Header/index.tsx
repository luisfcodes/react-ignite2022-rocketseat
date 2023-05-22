import { HeaderContainer } from './styles'

import Logo from '../../assets/logo.svg'
import EffectRightImg from '../../assets/effectRight.svg'
import EffectLeftImg from '../../assets/effectLeft.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={EffectLeftImg} alt="" />
      <img src={Logo} alt="" />
      <img src={EffectRightImg} alt="" />
    </HeaderContainer>
  )
}
