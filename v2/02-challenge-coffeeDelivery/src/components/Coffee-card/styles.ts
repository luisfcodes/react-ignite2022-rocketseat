import styled from "styled-components"

export const CardContainer = styled.li`
  background-color: ${(props) => props.theme.colors["base-card"]};
  border-radius: 6px 36px;
  padding: 1.25rem;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    position: absolute;
    top: -1.3rem;
  }

  .type {
    margin-top: calc(120px + 0.75rem - 2.5rem);
    display: flex;
    align-items: center;
    gap: 0.25rem;

    span {
      background-color: ${(props) => props.theme.colors["yellow-light"]};
      padding: 0.25rem 0.5rem;
      color: ${(props) => props.theme.colors["yellow-dark"]};
      border-radius: 100px;
      font-size: 0.625rem;
      font-weight: bold;
      line-height: 130%;
      text-transform: uppercase;
    }
  }

  .name {
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    margin-top: 1rem;
  }

  .description {
    color: ${(props) => props.theme.colors["base-label"]};
    text-align: center;
    font-size: 0.875rem;
    line-height: 130%;
    margin-top: 0.5rem;
  }

  .footer {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .currency {
      color: ${(props) => props.theme.colors["base-text"]};
      text-align: right;
      font-size: 0.875rem;
      line-height: 130%;
    }

    .price {
      color: ${(props) => props.theme.colors["base-text"]};
      font-family: "Baloo 2", sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 130%;
    }

    .footer-buy {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      div {
        background-color: ${(props) => props.theme.colors["base-button"]};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        border-radius: 6px;
        height: 38px;
        width: 72px;

        span {
          color: ${(props) => props.theme.colors["base-title"]};
          padding: 0 0.1rem;
        }

        button {
          display: flex;
          align-items: center;
          background-color: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.2s;

          svg {
            color: ${(props) => props.theme.colors.purple};
          }

          &.minus,
          &.plus {
            svg {
              &:hover {
                color: ${(props) => props.theme.colors["purple-dark"]};
              }
            }
          }
        }
      }

      .button-buy {
        background-color: ${(props) => props.theme.colors["purple-dark"]};
        color: ${(props) => props.theme.colors.white};
        padding: 0.5rem;
        border-radius: 6px;
        display: flex;
        align-items: center;
        border: none;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${(props) => props.theme.colors.purple};
        }
      }
    }
  }
`
