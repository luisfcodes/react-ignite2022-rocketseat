import styled from "styled-components";
import { Colors } from ".";

export const ItemContainer = styled.div<Colors>`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span:first-child {
    padding: 0.5rem;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${props => props.theme[props.backgroundColor]};

    svg {
      color: ${props => props.theme.background};
    }
  }

  span:last-child {
    color: ${props => props.theme["base-text"]};
  }
`