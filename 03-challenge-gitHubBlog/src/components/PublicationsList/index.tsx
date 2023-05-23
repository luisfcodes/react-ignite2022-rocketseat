import { PublicationCard } from '../PublicationCard'
import { PublicationsListContainer } from './styles'

export function PublicationsList() {
  return (
    <PublicationsListContainer>
      <header>
        <span>Publicações</span>
        <span>6 publicações</span>
      </header>

      <input type="text" placeholder="Buscar conteúdo" />

      <section>
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
        <PublicationCard />
      </section>
    </PublicationsListContainer>
  )
}
