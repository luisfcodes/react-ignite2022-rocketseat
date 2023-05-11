import { ReactNode, createContext, useEffect, useState } from "react";

interface CoffeeContextProviderProps {
  children: ReactNode
}

export interface CoffeeList {
  tags: string[]
  title: string
  subtitle: string
  price: string
  image: string
  amount: number
}

interface CoffeeContextType {
  coffeeList: CoffeeList[]
  updateCoffeeAmount: (coffeeTitle: string, newAmount: number) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({ children }: CoffeeContextProviderProps) {
  const [coffeeList, setCoffeeList] = useState<CoffeeList[]>([])

  useEffect(() => {
    fetch('http://localhost:3030/coffeeList')
      .then(data => data.json())
      .then(result => setCoffeeList(result))
  }, [])

  function updateCoffeeAmount(coffeeTitle: string, newAmount: number) {

    const newCoffeeList = coffeeList.map(item => {
      if (item.title === coffeeTitle) {
        return {
          ...item,
          amount: newAmount
        }
      } else {
        return item
      }
    })
    setCoffeeList(newCoffeeList)
  }

  return (
    <CoffeeContext.Provider value={{ coffeeList, updateCoffeeAmount }}>
      {children}
    </CoffeeContext.Provider>
  )
}