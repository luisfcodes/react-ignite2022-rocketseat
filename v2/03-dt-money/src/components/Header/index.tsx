import logoImg from "../../assets/logo.svg";
import { HeaderContainer, HeaderContent, NewTransationButton } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <NewTransationButton>Nova transação</NewTransationButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
