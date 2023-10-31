import { ThemeProvider } from "styled-components"
import { DefaultLayout } from "./layout/DefaultLayout"
import { Home } from "./pages/Home"
import { GlobalStyle } from "./styles/global"
import defaultTheme from "./styles/themes/DefaultTheme"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultLayout>
        <Home />
      </DefaultLayout>
      <GlobalStyle />
    </ThemeProvider>
  )
}
