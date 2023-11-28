import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import defaultTheme from "./styles/themes/DefaultTheme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>AAAAAAAAAA</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
}
