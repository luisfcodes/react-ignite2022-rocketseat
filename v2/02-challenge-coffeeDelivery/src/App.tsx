import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { CoffeesContextProvider } from "./contexts/CoffeesContext"
import { router } from "./router"
import { GlobalStyle } from "./styles/global"
import defaultTheme from "./styles/themes/DefaultTheme"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeesContextProvider>
        <RouterProvider router={router} />
      </CoffeesContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
