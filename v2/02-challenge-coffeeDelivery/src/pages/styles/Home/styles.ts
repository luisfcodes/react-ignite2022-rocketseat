import styled from "styled-components";
import backgroundImg from '../../../assets/background.svg';

export const HomeHeader = styled.section`
  display: flex;
  gap: 3.5rem;
  background-image: url(${backgroundImg});
  padding: 5.875rem 10rem;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      font-weight: 800;
      line-height: 130%;
      color: ${props => props.theme.colors["base-title"]};
    }

    p {
      margin-top: 1rem;
      font-size: 1.25rem;
      line-height: 130%;
      color: ${props => props.theme.colors["base-subtitle"]};
    }

    .benefits {
      display: flex;
      flex-wrap: wrap;
      row-gap: 1.25rem;
      column-gap: 2.5rem;

      div {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        svg {
          color: ${props => props.theme.colors.white};
        }

        &.benefits-cart, &.benefits-box, &.benefits-time, &.benefits-coffee {
          min-width: 231px;

          div {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          span {
            color: ${props => props.theme.colors["base-text"]};
          }
        }

        &.benefits-cart {
          div {
            background-color: ${props => props.theme.colors["yellow-dark"]};
          }
        }

        &.benefits-box {
          div {
            background-color: ${props => props.theme.colors["base-text"]};
          }
        }

        &.benefits-time {
          div {
            background-color: ${props => props.theme.colors.yellow};
          }
        }

        &.benefits-coffee {
          div {
            background-color: ${props => props.theme.colors.purple};
          }
        }
      }
    }
  }
`
export const HomeContent = styled.section`

`
