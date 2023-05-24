import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme['base-profile']};

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.blue};
    text-transform: uppercase;
    line-height: 160%;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: bold;
      font-size: 0.75rem;
      border-bottom: 1px solid transparent;
      transition: all 0.2s;
      height: min-content;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }

  h1 {
    margin-top: 1.25rem;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
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
