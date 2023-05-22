import { ProfileContainer } from './styles'

import AvatarImg from '../../assets/avatar.png'

export function Profile() {
  return (
    <ProfileContainer>
      <img src={AvatarImg} alt="" />

      <div>
        <div className="header">
          <h1>Cameron Williamson</h1>
          <a href="">GitHub</a>
        </div>

        <p className="description">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <div></div>
      </div>
    </ProfileContainer>
  )
}
