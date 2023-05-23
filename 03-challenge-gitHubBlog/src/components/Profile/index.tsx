import { ProfileContainer } from './styles'

import AvatarImg from '../../assets/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <img src={AvatarImg} alt="" />

      <div>
        <div className="header">
          <h1>Cameron Williamson</h1>
          <a href="">
            GitHub
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>

        <p className="description">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <div className="brands">
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </div>
        </div>
      </div>
    </ProfileContainer>
  )
}
