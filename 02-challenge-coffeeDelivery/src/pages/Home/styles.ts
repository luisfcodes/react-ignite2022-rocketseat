import styled from "styled-components";

export const HomeContainer = styled.main`
  .intro {
    display: flex;
    justify-content: space-between;
    gap: 3.5rem;
    padding: 5.75rem 0;

    .content {
      display: flex;
      flex-direction: column;
      gap: 4.125rem;

      > div{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h1 {
          font-family: 'Baloo 2', cursive;
          font-weight: 800;
          font-size: 3rem;
          line-height: 130%;
          color: ${props => props.theme["base-title"]};
        }

        .subtitle {
          font-size: 1.25rem;
          line-height: 130%;
          color: ${props => props.theme["base-subtitle"]};
          font-stretch: 100;
        }
      }

      .content-items {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;

        div {
          display: flex;
          align-items: center;
        }
      }
    }
  }

  .coffee-list {
    padding-top: 2rem;

    h2 {
      color: ${props => props.theme["base-subtitle"]};
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 2rem;
    }

    ul {
      margin-top: 3.375rem;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 2.5rem 2rem;
    }
  }
`