import styled from 'styled-components'

export const PostContainer = styled.main`
  margin-top: 10rem;
`

export const PostContent = styled.div`
  padding: 2rem;
  line-height: 160%;

  h3 {
    font-size: 1.5rem;
  }

  h3 {
    margin-top: 2.5rem;
  }

  a {
    display: inline-block;
    font-weight: 400;
    font-size: 1rem;
    text-decoration: underline;
    color: ${(props) => props.theme.blue};
  }

  code {
    padding: 0.2rem 0.4rem;
    font-size: 0.875rem;
    white-space: break-spaces;
    background-color: ${(props) => props.theme['base-border']};
    border-radius: 6px;
  }

  li {
    margin-top: 1rem;
  }

  p {
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
  }

  img {
    margin: 0 auto;
    display: block;
    border-radius: 8px;
  }
`
