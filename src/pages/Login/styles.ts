import styled from 'styled-components'

export const Error = styled.p`
  color: red;
  font-size: 24px;
  margin-top: 16px;
`

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #bdc3c7;
  min-height: 100vh;
`

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border-radius: 16px;
  margin-top: 128px;
  background-color: #2f80ed;
  width: 100%;
  max-width: 480px;

  h2 {
    color: #fff;
    font-size: 36px;
  }

  input {
    margin-top: 16px;
    padding: 8px;
    border-radius: 4px;
    border: none;
  }

  button {
    font-size: 16px;
    border-radius: 8px;
    border: none;
    margin-top: 8px;
    padding: 8px;
    color: #2f80ed;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`
