import styled from 'styled-components'

export const ProfileContainer = styled.div`
  padding: 2rem 2rem 2rem 2.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme['base-profile']};

  display: flex;
  gap: 2rem;

  .avatar {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }

  .header {
    display: flex;
    justify-content: space-between;

    h1 {
      color: ${(props) => props.theme['base-title']};
      font-size: 1.5rem;
      line-height: 130%;
    }

    a {
      text-transform: uppercase;
      color: ${(props) => props.theme.blue};
      font-weight: bold;
      font-size: 0.75rem;
      line-height: 160%;
      border-bottom: 1px solid transparent;
      transition: all 0.2s;
      height: min-content;

      svg {
        margin-left: 0.5rem;
        color: ${(props) => props.theme.blue};
        width: 12px;
        height: 12px;
      }

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }

  .description {
    margin-top: 0.5rem;
    line-height: 160%;
  }

  .brands {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`
