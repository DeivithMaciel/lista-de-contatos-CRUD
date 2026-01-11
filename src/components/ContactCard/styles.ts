import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Actions = styled.section`
  display: flex;
  gap: 8px;
`

export const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #2f80ed;
  color: #fff;

  &:hover {
    opacity: 0.9;
  }
`
