import { ReactNode, createContext, useState } from "react"

interface CoffeesContextProviderProps {
  children: ReactNode
}

interface Coffee {
  name: string
  imgUrl: string
  amount: number
  price: number
}

interface CoffeesContextData {
  coffeeSelectedList: Coffee[]
  setCoffeeSelectedList: (coffeeSelectedList: Coffee[]) => void
}

export const CoffeesContext = createContext<CoffeesContextData>(
  {} as CoffeesContextData,
)

export const CoffeesContextProvider = ({
  children,
}: CoffeesContextProviderProps) => {
  const [coffeeSelectedList, setCoffeeSelectedList] = useState<Coffee[]>([])

  return (
    <CoffeesContext.Provider
      value={{ coffeeSelectedList, setCoffeeSelectedList }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
