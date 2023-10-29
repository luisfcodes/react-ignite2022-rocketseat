import { ThemeProvider } from "styled-components"
import { DefaultLayout } from "./layout/DefaultLayout"
import { GlobalStyle } from "./styles/global"
import defaultTheme from "./styles/themes/DefaultTheme"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultLayout>
        <h1>Hello World</h1>
      </DefaultLayout>
      <GlobalStyle />
    </ThemeProvider>
  )
}
