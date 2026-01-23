import { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  mobile: '576px',
  tablet: '768px'
}

export const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  border-box: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f4f6f8;
  color: #333
}
`
