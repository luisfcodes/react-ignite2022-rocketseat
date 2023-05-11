import { Minus, Plus } from "@phosphor-icons/react";
import { ButtonContainer } from "./styles";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

export interface ButtonAmountProps {
  height: number
  amount: number
  coffeeTitle: string
}

export function ButtonAmount({ height, amount, coffeeTitle }: ButtonAmountProps) {

  const { updateCoffeeAmount } = useContext(CoffeeContext)

  function handleUpdateAmountCoffee(operationType: "addition" | "subtraction", amount: number ){
      const newAmount = operationType === "addition" ? amount + 1 : amount - 1 

      if(newAmount >= 0){
        updateCoffeeAmount(coffeeTitle, newAmount)
      }
  }

  return (
    <ButtonContainer height={height}>
      <button type="button">
        <Minus size={14} weight="bold" onClick={() => handleUpdateAmountCoffee("subtraction", amount)} />
      </button>
      <span> { amount } </span>
      <button type="button">
        <Plus size={14} weight="bold" onClick={() => handleUpdateAmountCoffee("addition", amount)}/>
      </button>
    </ButtonContainer>
  )
}