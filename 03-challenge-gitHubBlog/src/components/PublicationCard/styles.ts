import styled from 'styled-components'

export const PublicationCardContainer = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;
  line-height: 160%;

  div {
    display: flex;
    gap: 1rem;

    h2 {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
      flex: 1;
      line-height: 160%;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
    }
  }

  p {
    margin-top: 1.25rem;
  }
`
