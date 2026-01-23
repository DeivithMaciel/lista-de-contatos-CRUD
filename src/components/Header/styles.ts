import styled from 'styled-components'

export const Container = styled.header`
  background-color: #2f80ed;
  padding: 24px;
  display: flex;
  justify-content: space-between;
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
