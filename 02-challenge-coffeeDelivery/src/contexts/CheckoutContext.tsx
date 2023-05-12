import { ReactNode, createContext, useState } from "react";

interface FormData {
  cep: string
  street: string
  number: string
  complement?: string
  district: string
  city: string
  uf: string
}

interface OrderType {
  formData: FormData
  paymentMethod: string
}

interface CheckoutContextType {
  order: OrderType
  updateOrder: (order: OrderType) => void
}

interface CheckoutContextProviderProps{
  children: ReactNode
}

export const CheckoutContext = createContext({} as CheckoutContextType)

export function CheckoutContextProvider({ children }: CheckoutContextProviderProps) {
  const [order, setOrder] = useState<OrderType>({} as OrderType)

  function updateOrder(order: OrderType){
    setOrder(order)
  }

  return (
    <CheckoutContext.Provider value={{ order, updateOrder }}>
      { children }
    </CheckoutContext.Provider>
  )
}