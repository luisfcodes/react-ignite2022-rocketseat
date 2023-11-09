import { Minus, Plus, Trash } from "@phosphor-icons/react"
import { useContext } from "react"
import { CoffeesContext } from "../../contexts/CoffeesContext"
import { formatCurrency } from "../../utils/formatCurrency"
import { Divider, Wrapper } from "./styles"

interface CoffeeSelectedProps {
  name: string
  imgUrl: string
  amount: number
  price: number
}

export function CoffeeSelected({
  imgUrl,
  amount,
  name,
  price,
}: CoffeeSelectedProps) {
  const { setCoffeeSelectedList, coffeeSelectedList } =
    useContext(CoffeesContext)

  const totalPrice = amount * price
  const totalPriceFormatted = formatCurrency(totalPrice)

  const handlePlusCoffee = () => {
    const newCoffeeSelectedList = coffeeSelectedList.map((coffee) => {
      if (coffee.name === name) {
        return {
          ...coffee,
          amount: amount + 1,
        }
      }

      return coffee
    })

    setCoffeeSelectedList(newCoffeeSelectedList)
  }

  const handleMinusCoffee = () => {
    if (amount > 1) {
      const newCoffeeSelectedList = coffeeSelectedList.map((coffee) => {
        if (coffee.name === name) {
          return {
            ...coffee,
            amount: amount - 1,
          }
        }

        return coffee
      })

      setCoffeeSelectedList(newCoffeeSelectedList)
    }
  }

  const handleDeleteCoffee = () => {
    const newCoffeeSelectedList = coffeeSelectedList.filter(
      (coffee) => coffee.name !== name,
    )

    setCoffeeSelectedList(newCoffeeSelectedList)
  }

  return (
    <>
      <Wrapper>
        <img src={`img/coffees/${imgUrl}`} alt="" />

        <div className="content">
          <span className="name">{name}</span>

          <div className="buttons-container">
            <div className="buttons-amount">
              <button
                type="button"
                className="minus"
                onClick={handleMinusCoffee}
              >
                <Minus size={14} weight="bold" />
              </button>
              <span>{amount}</span>
              <button type="button" className="plus" onClick={handlePlusCoffee}>
                <Plus weight="bold" size={14} />
              </button>
            </div>

            <button className="delete-item" onClick={handleDeleteCoffee}>
              <Trash weight="regular" size={16} />
              <span>Remover</span>
            </button>
          </div>
        </div>

        <span className="price">{totalPriceFormatted}</span>
      </Wrapper>
      <Divider />
    </>
  )
}
