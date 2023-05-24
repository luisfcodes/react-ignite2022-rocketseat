import styled from 'styled-components'

export const PostContainer = styled.main`
  margin-top: 10rem;
`

export const PostContent = styled.div`
  padding: 2rem;
  line-height: 160%;

  a {
    display: inline-block;
    margin-top: 2.5rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    text-decoration: underline;
    color: ${(props) => props.theme.blue};
  }

  code {
    display: inline-block;
    margin-top: 1.5rem;
    padding: 1rem;
    background-color: ${(props) => props.theme['base-post']};
    border-radius: 2px;
    width: 100%;
  }
`
