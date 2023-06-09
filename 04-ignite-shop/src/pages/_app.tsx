import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from '@/styles/pages/app'

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ['latin']
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.className}>
      <Header>
        <Image src={logoImg} alt=''/>
        <h1>Header</h1>
      </Header>
      <Component {...pageProps} />
    </Container>

  )
}
