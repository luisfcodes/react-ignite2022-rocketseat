import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PostInfoContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faChevronLeft,
  faCalendarDay,
  faComment,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostInfoProps {
  title: string
  user: string
  comments: number
  html_url: string
  created_at: string
}

export function PostInfo({
  title,
  user,
  comments,
  html_url,
  created_at,
}: PostInfoProps) {
  return (
    <PostInfoContainer>
      <div className="header">
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </Link>
        <Link to={html_url} target="_blank">
          Ver no GitHub
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </div>

      <h1>{title}</h1>

      <div className="brands">
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <span>{user}</span>
        </div>

        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>
            {formatDistanceToNow(new Date(created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </div>

        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>
            {comments === 1 ? '1 comentário' : `${comments} comentários`}
          </span>
        </div>
      </div>
    </PostInfoContainer>
  )
}
