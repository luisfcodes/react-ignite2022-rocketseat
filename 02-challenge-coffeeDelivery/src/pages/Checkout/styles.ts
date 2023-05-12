import styled from "styled-components";

export const CheckoutContainer = styled.main`
  margin-top: 4.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  form{
    flex: 1;
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    section:first-child {
      flex: 1;
    }

    .form-title {
      color: ${props => props.theme["base-subtitle"]};
      font-family: 'Baloo 2', cursive;
      font-weight: bold;
      font-size: 1.125rem;
    }

    .container {
      margin-top: 1rem;
      background-color: ${props => props.theme["base-card"]};
      padding: 2.5rem;
      border-radius: 6px;

      .form-header {
        display: flex;
        gap: .5rem;

        .map-icon {
          color: ${props => props.theme["yellow-dark"]};
        }

        .currency-icon {
          color: ${props => props.theme.purple};
        }

        h3 {
          color: ${props => props.theme["base-subtitle"]};
          font-weight: 400;
          font-size: 1rem;
        }

        span {
          font-size: .875rem;
          color: ${props => props.theme["base-text"]};
        }
      }

      .form-inputs {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
          height: 42px;
          padding: .75rem;
          background-color: ${props => props.theme["base-input"]};
          border: 1px solid ${props => props.theme["base-button"]};
          border-radius: 4px;
          color: ${props => props.theme["base-text"]};

          :focus {
            outline: 1px solid ${props => props.theme["yellow-dark"]};
          }
        
          ::placeholder {
            color: ${props => props.theme["base-label"]};
            font-size: .875rem;
          }
        }

        .inputWidth{
          width: 200px;
        }

        .form-group {
          display: flex;
          gap: .75rem;
        }

        .inputUF {
          width: 60px;
        }

        .inputCity, .inputStreet{
          flex: 1;

          input {
            width: 100%;
          }
        }

        .inputComplement {
          width: 100%;
          display: flex;
          align-items: center;
          position: relative;

          input {
            width: 100%;
          }

          input + label {
            position: absolute;
            right: .75rem;
            font-style: italic;
            font-size: .75rem;
            color: ${props => props.theme["base-label"]};
            transition: all .2s ease-in-out;
          }

          input:focus + label {
            color: transparent;
          }

          .hidden {
            display: none;
          }
        }

        .form-group-error-message{
          p {
            margin-top: .25rem;
            font-size: .75rem;
            color: ${props => props.theme.warn};
          }
        }
      }

      .payment-methods {
        margin-top: 2rem;
        display: flex;
        align-items: center;
        gap: .75rem;

        button {
          width: 100%;
          padding: 1rem;
          background-color: ${props => props.theme["base-button"]};
          border-radius: 6px;
          border: 1px solid transparent;
          display: flex;
          align-items: center;
          gap: .75rem;
          transition: all .2s;

          &.method-active {
            background-color: ${props => props.theme["purple-light"]};
            border: 1px solid ${props => props.theme.purple};
          }

          &:not(.method-active):hover {
            background-color: ${props => props.theme["base-hover"]};
          }

          svg {
            color: ${props => props.theme.purple};
          }

          span {
            font-size: .75rem;
            text-transform: uppercase;
            color: ${props => props.theme["base-text"]};
          }
        }
      }
    }
  }

  .coffee-selected-container{
    border-radius: 6px 44px;
    width: 448px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .coffee-empty {
      border: 6px dashed ${props => props.theme["base-hover"]};
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.25rem;
      padding: 1rem;
      transition: all .2s;
    }

    .coffee-empty-warn {
      border: 6px dashed ${props => props.theme.warn};
      color: ${props => props.theme.warn};
    }

    .coffee-selected {
      display: flex;
      padding: .5rem .25rem;

      img {
        width: 64px;
        height: 64px;
      }

      .actions {
        margin-left: 1.25rem;

        .title {
          font-size: 1rem;
          color: ${props => props.theme["base-subtitle"]};
        }

        .actions-buttons {
          margin-top: .5rem;
          display: flex;
          align-items: center;
          gap: .5rem;

          .remove-button {
            display: flex;
            align-items: center;
            gap: .25rem;
            height: 32px;
            width: 91px;
            padding: 0 .5rem;
            background-color: ${props => props.theme["base-button"]};
            border-radius: 6px;
            border: none;
            transition: all .2s;

            &:hover {
              background-color: ${props => props.theme["base-hover"]};
            }

            svg {
              color: ${props => props.theme.purple}
            }

            span {
              font-size: .75rem;
              text-transform: uppercase;
              color: ${props => props.theme["base-text"]};
            }
          }
        }
      }

      .price {
        flex: 1;
        text-align: end;
        font-weight: bold;
        color: ${props => props.theme["base-text"]};
      }
    }

    .final-price {
      display: flex;
      flex-direction: column;
      gap: .75rem;

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
          font-size: .875rem;
          color: ${props => props.theme["base-text"]};
        }

        .price {
          color: ${props => props.theme["base-text"]};
        }
      }

      .total {
        font-weight: bold;
        font-size: 1.25rem;
        color: ${props => props.theme["base-subtitle"]};
      }
    }

    .button-confirm {
      padding: .875rem .5rem;
      background-color: ${props => props.theme.yellow};
      border-radius: 6px;
      border: none;
      font-weight: bold;
      font-size: .875rem;
      text-transform: uppercase;
      color: ${props => props.theme.white};
      transition: all .2s;

      &:hover {
        background-color: ${props => props.theme["yellow-dark"]};
      }
    }
  }
`

export const Divider = styled.hr`
  height: 0;
  border: 1px solid ${props => props.theme["base-button"]};
`