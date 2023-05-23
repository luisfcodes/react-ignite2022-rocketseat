import { PublicationCardContainer } from './styles'

export function PublicationCard() {
  return (
    <PublicationCardContainer>
      <div>
        <h2>JavaScript data types and data structures</h2>
        <span>Há 1 dia</span>
      </div>

      <p>
        {`Programming languages all have built-in data structures, but these often
          differ from one language to another. This article attempts to list the
          built-in data structures available in JavaScript and what properties
          they have.`.slice(0, 201) + '...'}
      </p>
    </PublicationCardContainer>
  )
}
