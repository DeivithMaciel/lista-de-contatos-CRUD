import styled from 'styled-components'

export const Error = styled.p`
  color: red;
  font-size: 24px;
  margin-top: 16px;
  text-align: center;
`

export const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    padding-top: 32px;
    text-align: center;
    color: #fff;
    font-size: 36px;
  }
`

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border-radius: 16px;
  background-color: #2f80ed;
  width: 100%;
  max-width: 480px;

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
