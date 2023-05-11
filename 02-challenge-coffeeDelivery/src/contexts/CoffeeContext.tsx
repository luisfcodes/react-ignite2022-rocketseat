import { ReactNode, createContext, useEffect, useState } from "react";

interface CoffeeContextProviderProps {
  children: ReactNode
}

export interface CoffeeList {
  tags: string[]
  title: string
  subtitle: string
  price: number
  image: string
  amount: number
}

interface CoffeeContextType {
  coffeeList: CoffeeList[]
  coffeeCartList: CoffeeList[]
  updateCoffeeAmount: (coffeeTitle: string, newAmount: number) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({ children }: CoffeeContextProviderProps) {
  const [coffeeList, setCoffeeList] = useState<CoffeeList[]>([])
  const [coffeeCartList, setCoffeeCartList] = useState<CoffeeList[]>([])

  useEffect(() => {
    console.log('teste')
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

    const newCoffeeCartList = newCoffeeList.filter((item) => item.amount > 0)

    setCoffeeCartList(newCoffeeCartList)
    setCoffeeList(newCoffeeList)
  }

  return (
    <CoffeeContext.Provider value={{ coffeeList, updateCoffeeAmount, coffeeCartList }}>
      {children}
    </CoffeeContext.Provider>
  )
}