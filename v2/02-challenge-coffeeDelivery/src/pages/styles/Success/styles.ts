import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 5rem 10rem 2rem;

  h1 {
    color: ${(props) => props.theme.colors["yellow-dark"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 800;
  }

  h1 + p {
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-size: 1.25rem;
  }

  .content {
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 130%;

    .summary-wrapper {
      background: ${(props) => props.theme.colors.yellow};
      background: linear-gradient(
        150deg,
        ${(props) => props.theme.colors.yellow} 0%,
        ${(props) => props.theme.colors.purple} 100%
      );
      padding: 1px;
      border-radius: 6px 36px;
      overflow: hidden;
      height: 100%;
      width: 526px;

      .summary {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: white;
        padding: 2.5rem;
        border-radius: 6px 36px;

        .summary-content {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: ${(props) => props.theme.colors["base-text"]};

          div:first-child {
            padding: 0.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;

            svg {
              color: ${(props) => props.theme.colors.white};
            }
          }

          .bold {
            font-weight: 700;
          }
        }

        .address {
          div:first-child {
            background-color: ${(props) => props.theme.colors.purple};
          }
        }

        .delivery {
          div:first-child {
            background-color: ${(props) => props.theme.colors.yellow};
          }
        }

        .payment {
          div:first-child {
            background-color: ${(props) => props.theme.colors["yellow-dark"]};
          }
        }
      }
    }
  }
`
