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

    .location {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      gap: 0.25rem;
      border-radius: 6px;
      background-color: ${props => props.theme.colors["purple-light"]};
      border: none;

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
      display: flex;
      align-items: center;
      border: 0;
      padding: 0.5rem;
      border-radius: 6px;
      background-color: ${props => props.theme.colors["yellow-light"]};

      svg {
        color: ${props => props.theme.colors["yellow-dark"]};
      }
    }
  }
`
