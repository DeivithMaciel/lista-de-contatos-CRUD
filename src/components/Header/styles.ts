import styled from 'styled-components'
import { breakpoints } from '../../styles/GlobalStyles'

export const Container = styled.header`
  background-color: #2f80ed;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`

export const Title = styled.h1`
  color: #fff;
  font-size: 24px;
`

export const InfoUser = styled.section`
  color: #fff;
  display: flex;
  align-items: center;
  padding-right: 360px;

  @media (max-width: ${breakpoints.tablet}) {
    padding-right: 260px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding-right: 24px;
  }

  .avatar {
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    font-size: 16px;
    border-radius: 8px;
    border: none;
    margin-left: 8px;
    padding: 8px;
    color: #2f80ed;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`
