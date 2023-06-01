import { Link } from 'react-router-dom'
import { PublicationCardContainer } from './styles'
import ReactMarkdown from 'react-markdown'

interface PublicationCardProps {
  id: number
  title: string
  body: string
}

export function PublicationCard({ id, title, body }: PublicationCardProps) {
  return (
    <PublicationCardContainer>
      <div>
        <h2>
          <Link to={`/post/${id}`}>{title}</Link>
        </h2>
        <span>Há 1 dia</span>
      </div>

      <ReactMarkdown className="summary">
        {body.slice(0, 201) + '...'}
      </ReactMarkdown>
    </PublicationCardContainer>
  )
}
