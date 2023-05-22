import styled from 'styled-components'

export const ProfileContainer = styled.div`
  padding: 2rem 2rem 2rem 2.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme['base-profile']};

  display: flex;
  gap: 2rem;

  .header {
    display: flex;
    justify-content: space-between;

    h1 {
      color: ${(props) => props.theme['base-title']};
      font-size: 1.5rem;
      line-height: 130%;
    }
  }

  .description {
    margin-top: 0.5rem;
    line-height: 160%;
  }
`
