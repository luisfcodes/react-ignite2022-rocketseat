import styled from "styled-components"

export const FormWrapper = styled.form`
  padding: 2.5rem 10rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  h2 {
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
  }
`

export const Header = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme.colors["base-text"]};
    font-size: 0.875rem;
    line-height: 130%;
  }
`

export const PersonalData = styled.div`
  flex: 1;

  h3 {
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
  }

  .address,
  .payment-methods {
    display: flex;
    padding: 2.5rem;
    flex-direction: column;
    gap: 2rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme.colors["base-card"]};
    margin-top: 1rem;
  }

  .address {
    svg {
      color: ${(props) => props.theme.colors["yellow-dark"]};
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .input-wrapper {
        p {
          margin-top: 0.5rem;
          font-size: 0.75rem;
          color: ${(props) => props.theme.colors.warn};
        }
      }

      input {
        padding: 0.75rem;
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme.colors["base-button"]};
        background: ${(props) => props.theme.colors["base-input"]};
        outline-color: ${(props) => props.theme.colors["yellow-dark"]};

        &::placeholder {
          color: ${(props) => props.theme.colors["base-label"]};
        }
      }

      input[placeholder="CEP"] {
        width: 200px;
      }

      input[placeholder="Rua"] {
        width: 100%;
      }

      .number-complement {
        display: flex;
        align-items: flex-start;
        gap: 1rem;

        input[type="number"] {
          width: 200px;
        }

        .complement {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;

          &::after {
            content: "Opcional";
            position: absolute;
            color: ${(props) => props.theme.colors["base-label"]};
            font-size: 0.75rem;
            font-style: italic;
            right: 0.75rem;
          }

          input {
            width: 100%;
          }
        }
      }

      .neighborhood-city-uf {
        display: flex;
        align-items: flex-start;
        gap: 1rem;

        input[placeholder="Bairro"] {
          width: 200px;
        }

        .city {
          flex: 1;

          input {
            width: 100%;
          }
        }

        input[placeholder="UF"] {
          width: 60px;
        }
      }
    }
  }

  .payment-methods {
    svg {
      color: ${(props) => props.theme.colors.purple};
    }

    .cards {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.75rem;

      input[type="radio"] {
        display: none;
      }

      label {
        display: flex;
        padding: 1rem;
        align-items: center;
        gap: 0.75rem;
        flex: 1 0 0;
        border-radius: 6px;
        background-color: ${(props) => props.theme.colors["base-button"]};
        border: 1px solid transparent;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${(props) => props.theme.colors["base-hover"]};
        }

        span {
          color: ${(props) => props.theme.colors["base-text"]};
          font-size: 0.75rem;
          text-transform: uppercase;
        }

        &.selected {
          border-radius: 6px;
          border: 1px solid ${(props) => props.theme.colors.purple};
          background: ${(props) => props.theme.colors["purple-light"]};
        }
      }
    }
  }
`

export const OrderSummary = styled.section`
  .summary {
    width: 448px;
    background-color: ${(props) => props.theme.colors["base-card"]};
    margin-top: 1rem;
    border-radius: 6px 44px;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .emptyCart {
      text-align: center;
      color: ${(props) => props.theme.colors.warn};
      background-color: ${(props) => props.theme.colors["red-light"]};
      padding: 0.5rem 0;
      border-radius: 6px;
      font-weight: bold;
      text-transform: uppercase;
    }

    .subtotal {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          color: ${(props) => props.theme.colors["base-text"]};
        }

        span:first-child {
          font-size: 0.875rem;
        }

        &:last-child {
          span {
            font-size: 1.25rem;
            font-weight: bold;
            color: ${(props) => props.theme.colors["base-subtitle"]};
          }
        }
      }
    }

    .btn-submit {
      padding: 0.75rem 0.5rem;
      border-radius: 6px;
      background-color: ${(props) => props.theme.colors.yellow};
      color: ${(props) => props.theme.colors.white};
      font-size: 0.875rem;
      font-weight: 700;
      text-transform: uppercase;
      border: none;
      transition: all 0.2s;

      &:hover {
        background-color: ${(props) => props.theme.colors["yellow-dark"]};
      }
    }
  }
`
