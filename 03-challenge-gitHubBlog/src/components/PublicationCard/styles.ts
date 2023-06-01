import styled from 'styled-components'

export const PublicationCardContainer = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;
  line-height: 160%;
  max-height: 270px;

  div {
    display: flex;
    gap: 1rem;

    h2 {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
      flex: 1;
      line-height: 160%;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: ${(props) => props.theme.blue};
      }
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
    }
  }

  .summary {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: 1.25rem;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      display: none;
    }

    p {
      display: inline-block;
    }
  }
`
