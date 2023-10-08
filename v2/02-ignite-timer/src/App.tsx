import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>React TypeScript Starter</h1>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <span>Clicked {count} times</span>
      </p>

      <GlobalStyles />
    </ThemeProvider>
  )
}
