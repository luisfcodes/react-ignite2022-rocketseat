import { ThemeProvider } from "styled-components"
import { Container } from "./layout/Default"
import { GlobalStyle } from "./styles/global"
import defaultTheme from "./styles/themes/DefaultTheme"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <h1>Hello World</h1>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}
