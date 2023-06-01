import { ProfileContainer } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface User {
  name: string
  login: string
  bio: string
  html_url: string
  company: string
  followers: number
  avatar_url: string
}

export function Profile() {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    api.get('/users/luisfcodes').then((response) => setUser(response.data))
  }, [])

  return user ? (
    <ProfileContainer>
      <img src={user.avatar_url} alt="" className="avatar" />

      <div>
        <div className="header">
          <h1>{user.name}</h1>
          <Link to={user.html_url} target="_blank" rel="noreferrer">
            GitHub
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </div>

        <p className="description">{user.bio}</p>

        <div className="brands">
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.login}</span>
          </div>

          {user.company && (
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{user.company}</span>
            </div>
          )}

          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{user.followers} seguidores</span>
          </div>
        </div>
      </div>
    </ProfileContainer>
  ) : (
    <></>
  )
}
