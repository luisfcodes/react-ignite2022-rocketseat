import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 296px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  background-color: ${(props) => props.theme['base-profile']};

  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 236px;
    height: 236px;
    background-color: #14589c;
    filter: blur(200px);
    left: -130px;
    top: -96px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 155.25px;
    height: 155.25px;
    background-color: #14589c;
    filter: blur(184px);
    right: -15.43px;
    top: -52.14;
    transform: rotate(15deg);
  }

  img:nth-child(2) {
    margin-top: -5rem;
  }
`
