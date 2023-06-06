import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@/styles'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        <link
          rel="icon"
          href="/favicon.png"
          type="image/png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
