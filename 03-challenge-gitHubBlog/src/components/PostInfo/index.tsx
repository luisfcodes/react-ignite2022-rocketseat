import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PostInfoContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faChevronLeft,
  faComment,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

interface PostInfoProps {
  title: string
  user: string
  comments: number
  html_url: string
}

export function PostInfo({ title, user, comments, html_url }: PostInfoProps) {
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
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Há 1 dia</span>
        </div>

        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>{comments} comentários</span>
        </div>
      </div>
    </PostInfoContainer>
  )
}
