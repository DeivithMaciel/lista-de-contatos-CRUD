import { styled } from 'styled-components'

import { breakpoints } from '../../styles/GlobalStyles'

export const ToastBox = styled.div`
  position: fixed;
  top: 24px;
  right: 26px;

  background-color: #2eec;
  color: #fff;
  padding: 12px 20px;
  border-radius: 6px;
  font-weight: bold;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2)
  z-index: 999;

  @media (max-width: ${breakpoints.mobile}) {
    position: static;
    margin: 16px;
    max-width: 100%;

    text-align: center;
  }
`
