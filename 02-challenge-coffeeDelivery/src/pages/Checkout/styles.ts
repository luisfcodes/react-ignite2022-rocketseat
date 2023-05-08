import styled from "styled-components";

export const CheckoutContainer = styled.main`
  margin-top: 4.5rem;
  display: flex;
  justify-content: space-between;

  h2 {
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

    .title {
      display: flex;
      gap: .5rem;

      svg {
        color: ${props => props.theme["yellow-dark"]};
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

    form {
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
        color: ${props => props.theme["base-label"]};
        
        ::placeholder {
          color: ${props => props.theme["base-label"]};
          font-size: .875rem;
        }
      }

      .inputWidth{
        width: 200px;
      }

      div {
        display: flex;
        gap: .75rem;
      }

      .inputUF {
        width: 60px;
      }

      .inputComplement{
        flex: 1;
      }
    }

    .payment-methods {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      gap: .75rem;

      button {
        padding: 1rem;
        background-color: ${props => props.theme["base-button"]};
        border-radius: 6px;
        border: none;
        display: flex;
        align-items: center;
        gap: .75rem;

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

  .coffee-selected {
    display: flex;

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
  }
`