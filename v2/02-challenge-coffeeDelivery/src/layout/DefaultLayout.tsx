import { ReactNode } from "react"
import { Header } from "../components/Header"
import { Container } from "./styles"

interface DefaultLayoutProps {
  children: ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}
