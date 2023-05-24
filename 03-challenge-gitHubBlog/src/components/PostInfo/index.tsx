import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PostInfoContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faChevronLeft,
  faComment,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <div className="header">
        <a href="#">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </a>
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
