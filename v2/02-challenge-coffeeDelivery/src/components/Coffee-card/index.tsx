import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react"
import { useContext, useState } from "react"
import { CoffeesContext } from "../../contexts/CoffeesContext"
import { CardContainer } from "./styles"

interface CoffeeCardProps {
  imgUrl: string
  name: string
  attributes: string[]
  description: string
}

export function CoffeeCard({
  name,
  attributes,
  description,
  imgUrl,
}: CoffeeCardProps) {
  const { coffeeSelectedList, setCoffeeSelectedList } =
    useContext(CoffeesContext)

  const [amount, setAmount] = useState(1)

  const handleMinusCoffee = () => {
    if (amount > 1) {
      setAmount((prevState) => prevState - 1)
    }
  }

  const handlePlusCoffee = () => {
    setAmount((prevState) => prevState + 1)
  }

  const handleAddCoffee = (name: string) => {
    const coffee = coffeeSelectedList.find((coffee) => coffee.name === name)

    if (coffee) {
      const newCoffeeSelectedList = coffeeSelectedList.map((coffee) => {
        if (coffee.name === name) {
          return {
            ...coffee,
            amount: amount,
          }
        }

        return coffee
      })

      setCoffeeSelectedList(newCoffeeSelectedList)
    } else {
      setCoffeeSelectedList([
        ...coffeeSelectedList,
        {
          name,
          imgUrl,
          amount,
          price: 9.9,
        },
      ])
    }

    setAmount(1)
  }

  return (
    <CardContainer>
      <img src={`src/assets/coffees/${imgUrl}`} alt="" />

      <div className="type">
        {attributes.map((attribute) => (
          <span key={attribute}>{attribute}</span>
        ))}
      </div>

      <span className="name">{name}</span>

      <span className="description">{description}</span>

      <div className="footer">
        <div>
          <span className="currency">R$ </span>
          <span className="price">9,90</span>
        </div>

        <div className="footer-buy">
          <div>
            <button className="minus" onClick={handleMinusCoffee}>
              <Minus weight="bold" size={14} />
            </button>
            <span>{amount}</span>
            <button className="plus" onClick={handlePlusCoffee}>
              <Plus weight="bold" size={14} />
            </button>
          </div>

          <button className="button-buy" onClick={() => handleAddCoffee(name)}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </div>
      </div>
    </CardContainer>
  )
}
