import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PostInfoContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faChevronLeft,
  faComment,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <div className="header">
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </Link>
        <a href="#">
          Ver no GitHub
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>

      <h1>JavaScript data types and data structures</h1>

      <div className="brands">
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <span>cameronwll</span>
        </div>

        <div>
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Há 1 dia</span>
        </div>

        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>5 comentários</span>
        </div>
      </div>
    </PostInfoContainer>
  )
}
