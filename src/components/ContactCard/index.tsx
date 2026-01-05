import * as S from './styles'
import Button from '../Button'

const ContactCard = () => {
  return (
    <S.Card>
      <S.Info>
        <strong>Paulo Henrique</strong>
        <span>Paulo@gmail.com</span>
      </S.Info>
      <S.Actions>
        <Button text="Editar" />
        <Button text="Remover" />
      </S.Actions>
    </S.Card>
  )
}

export default ContactCard
