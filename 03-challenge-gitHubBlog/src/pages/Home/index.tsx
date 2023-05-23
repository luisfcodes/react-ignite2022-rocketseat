import { Profile } from '../../components/Profile'
import { PublicationsList } from '../../components/PublicationsList'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <PublicationsList />
    </HomeContainer>
  )
}
