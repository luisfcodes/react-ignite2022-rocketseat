import { ReactNode } from "react"
import { ItemContainer } from "./styles";

interface ItemProps {
  text: string;
  children: ReactNode;
}

export function Item({text, children}: ItemProps) {
  return (
    <ItemContainer>
      <span>
        {children}
      </span>
      <span>{text}</span>
    </ItemContainer>
  )
}