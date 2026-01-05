import { ButtonPrimary } from './styles'

type ButtonProps = {
  text: string
}

const Button = ({ text }: ButtonProps) => {
  return <ButtonPrimary>{text}</ButtonPrimary>
}

export default Button
