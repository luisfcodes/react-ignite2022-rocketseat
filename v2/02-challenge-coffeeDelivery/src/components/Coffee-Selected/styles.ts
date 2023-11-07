import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;

  img {
    width: 64px;
    height: 64px;
  }

  .content {
    flex: 1;
    margin-left: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .name {
      color: ${(props) => props.theme.colors["base-subtitle"]};
    }

    .buttons-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .buttons-amount {
        height: 32px;
        padding: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
        border-radius: 6px;
        background-color: ${(props) => props.theme.colors["base-button"]};

        button {
          background-color: transparent;
          border: none;
          display: flex;
          align-items: center;
          transition: all 0.2s;
        }

        .minus,
        .plus {
          svg {
            &:hover {
              color: ${(props) => props.theme.colors["purple-dark"]};
            }
          }
        }

        svg {
          color: ${(props) => props.theme.colors.purple};
        }

        span {
          width: 20px;
          text-align: center;
        }
      }

      .delete-item {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        background-color: ${(props) => props.theme.colors["base-button"]};
        height: 32px;
        padding: 0 0.5rem;
        border-radius: 6px;
        border: none;
        transition: all 0.2s;

        &:hover {
          background-color: ${(props) => props.theme.colors["base-hover"]};
        }

        svg {
          color: ${(props) => props.theme.colors.purple};
        }

        span {
          color: ${(props) => props.theme.colors["base-text"]};
          font-size: 0.75rem;
          text-transform: uppercase;
        }
      }
    }
  }

  .price {
    color: ${(props) => props.theme.colors["base-text"]};
    font-weight: 700;
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors["base-button"]};
`
