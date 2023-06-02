import { Link } from 'react-router-dom'
import { PublicationCardContainer } from './styles'
import ReactMarkdown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PublicationCardProps {
  id: number
  title: string
  body: string
  created_at: string
}

export function PublicationCard({
  id,
  title,
  body,
  created_at,
}: PublicationCardProps) {
  return (
    <PublicationCardContainer>
      <div>
        <h2>
          <Link to={`/post/${id}`}>{title}</Link>
        </h2>
        <span>
          {formatDistanceToNow(new Date(created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>

      <ReactMarkdown className="summary">
        {body.slice(0, 201) + '...'}
      </ReactMarkdown>
    </PublicationCardContainer>
  )
}
