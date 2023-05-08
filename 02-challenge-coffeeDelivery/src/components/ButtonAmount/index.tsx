import { Minus, Plus } from "@phosphor-icons/react";
import { ButtonContainer } from "./styles";

export interface ButtonAmountProps {
  height: number
}

export function ButtonAmount({ height }: ButtonAmountProps) {
  return (
    <ButtonContainer height={height}>
      <button>
        <Minus size={14} weight="bold" />
      </button>
      <span>1</span>
      <button>
        <Plus size={14} weight="bold" />
      </button>
    </ButtonContainer>
  )
}