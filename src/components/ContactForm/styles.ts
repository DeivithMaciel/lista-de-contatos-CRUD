import styled from 'styled-components'
import { breakpoints } from '../../styles/GlobalStyles'

export const Form = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }

  input {
    padding: 8px;
    flex: 1;
  }

  button {
    padding: 8px 16px;
    background-color: #2f80ed;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 8px;

    &:hover {
      opacity: 0.9;
    }
  }
`
