import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    .location,
    .cart {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      border-radius: 6px;
      border: none;
      cursor: pointer;
    }

    .location {
      gap: 0.25rem;
      background-color: ${(props) => props.theme.colors["purple-light"]};

      svg {
        color: ${(props) => props.theme.colors.purple};
      }

      span {
        font-size: 0.875rem;
        line-height: 130%;
        color: ${(props) => props.theme.colors["purple-dark"]};
      }
    }

    .cart {
      background-color: ${(props) => props.theme.colors["yellow-light"]};
      position: relative;

      span {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: bold;
        top: -0.5rem;
        right: -0.5rem;
        width: 1.25rem;
        height: 1.25rem;
        background-color: ${(props) => props.theme.colors["yellow-dark"]};
        color: ${(props) => props.theme.colors.white};
        border-radius: 50%;
      }

      svg {
        color: ${(props) => props.theme.colors["yellow-dark"]};
      }
    }
  }
`
