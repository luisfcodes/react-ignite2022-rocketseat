import styled from "styled-components";

export const CardContainer = styled.li`
  position: relative;
  background-color: ${props => props.theme["base-card"]};
  border-radius: 6px 36px;
  width: calc(25% - 1.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;

  img {
    width: 120px;
    height: 120px;
    position: absolute;
    top: -1.25rem;
  }

  .tag {
    margin-top: 90px;
    padding: 4px 8px;
    background-color: ${props => props.theme["yellow-light"]};
    border-radius: 100px;
    font-weight: 700;
    font-size: 0.625rem;
    text-transform: uppercase;
    color: ${props => props.theme["yellow-dark"]};
  }

  h3 {
    margin-top: 1rem;
    color: ${props => props.theme["base-subtitle"]};
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.25rem;
  }

  .subtitle {
    font-size: 0.875rem;
    text-align: center;
    color: ${props => props.theme["base-label"]};
  }

  .actions {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .currency {
      margin-top: .18rem;
      font-size: .875rem;
      color: ${props => props.theme["base-text"]};
    }

    .price {
      font-family: 'Baloo 2', cursive;
      font-size: 1.5rem;
      font-weight: 800;
      color: ${props => props.theme["base-text"]};
      margin-left: .2rem;
    }

    .actions-buttons {
      margin-left: 2rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .amount {
        width: 72px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: ${props => props.theme["base-button"]};
        padding: 0.5rem;
        border-radius: 6px;

        button {
          cursor: pointer;
          background-color: transparent;
          display: flex;
          border: none;
          color: ${props => props.theme.purple};
        }

        span {
          color: ${props => props.theme["base-title"]};
        }
      }

      .buy-button {
        cursor: pointer;
        padding: 0.5rem;
        width: 38px;
        height: 38px;
        background-color: ${props => props.theme["purple-dark"]};
        border-radius: 6px;
        border: none;
        color: ${props => props.theme.background};
      }
    }
  }
`