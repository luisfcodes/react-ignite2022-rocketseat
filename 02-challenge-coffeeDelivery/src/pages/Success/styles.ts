import styled from "styled-components";

export const SuccessContainer = styled.main`
  margin-top: 7rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    color: ${props => props.theme["yellow-dark"]};
  }

  p {
    font-size: 1.25rem;
    color: ${props => props.theme["base-subtitle"]};
  }

  section {
    display: flex;
    justify-content: space-between;
    margin-top: 2.5rem;
    gap: 6.375rem;

    .order-information-wrapper {
      background: linear-gradient(102.89deg, ${props => props.theme.yellow} 2.61%, ${props => props.theme.purple} 98.76%);
      border-radius: 6px 36px;
      padding: 1px;
      flex: 1;

      .order-information {
        height: 100%;
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        border-radius: 6px 36px;
        background-color: ${props => props.theme.background};

        .order-information-group {
          display: flex;
          align-items: center;
          gap: .75rem;
          
          div:last-child{
            display: flex;
            flex-direction: column;
            line-height: 130%;
          }
        }
      }
    }
  }
`

interface ItemProps {
  color: 'purple' | 'yellow' | 'yellow-dark'
}

export const Item = styled.div<ItemProps>`
  background-color: ${props => props.theme[props.color]};
  color: ${props => props.theme.background};
  padding: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1000px;
`