import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    .location, .cart {
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
      background-color: ${props => props.theme.colors["purple-light"]};

      svg {
        color: ${props => props.theme.colors.purple};
      }

      span {
        font-size: 0.875rem;
        line-height: 130%;
        color: ${props => props.theme.colors["purple-dark"]};
      }
    }

    .cart {
      background-color: ${props => props.theme.colors["yellow-light"]};

      svg {
        color: ${props => props.theme.colors["yellow-dark"]};
      }
    }
  }
`
