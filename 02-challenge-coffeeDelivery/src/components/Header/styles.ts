import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: .75rem;

    a:first-child {
      display: flex;
      align-items: center;
      gap: .25rem;
      background-color: ${props => props.theme["purple-light"]};
      border-radius: 6px;
      padding: .5rem;

      span {
        color: ${props => props.theme["purple-dark"]};
        font-size: .875rem;
      }

      svg {
        color: ${props => props.theme.purple};
      }
    }

    a:last-child {
      display: flex;
      align-items: center;
      background-color: ${props => props.theme["yellow-light"]};
      padding: .5rem;
      border-radius: 6px;

      svg {
        color: ${props => props.theme["yellow-dark"]};
      }
    }

    .counter {
      position: relative;

      span{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme["yellow-dark"]};
        right: -.5rem;
        top: -.5rem;
        width: 20px;
        height: 20px;
        border-radius: 1000px;
        font-weight: bold;
        font-size: .75rem;
        color: ${props => props.theme.white};
      }
    }
  }
`