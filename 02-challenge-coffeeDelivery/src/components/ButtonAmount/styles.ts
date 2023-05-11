import styled from "styled-components";
import { ButtonAmountProps } from ".";

export const ButtonContainer = styled.div<Pick<ButtonAmountProps, 'height'>>`
  width: 72px;
  height: ${props => props.height}px;
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
    transition: all .2s;

    &:hover {
      color: ${props => props.theme["purple-dark"]};
    }
  }

  span {
    color: ${props => props.theme["base-title"]};
  }
`

