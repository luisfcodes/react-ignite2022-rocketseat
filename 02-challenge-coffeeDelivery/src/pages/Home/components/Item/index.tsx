import { ReactNode } from "react"
import { ItemContainer } from "./styles";

export interface Colors {
  backgroundColor: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}

interface ItemProps extends Colors{
  text: string;
  children: ReactNode;
}

export function Item({text, children, backgroundColor}: ItemProps) {
  return (
    <ItemContainer backgroundColor={backgroundColor}>
      <span>
        {children}
      </span>
      <span>{text}</span>
    </ItemContainer>
  )
}