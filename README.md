     Lista de Contatos CRUD - React + Typescript

  Projeto MVP de uma lista de contatos com CRUD, desenvolvimento em React com Typescript,
utiliza um Context API e um Back-End REST (json-server) hospedado online no Render.
O projeto simula um sistema real de cadastro de contatos e manipulação dos próprios,
tendo persistência de dados, feedback visual e deploy em produção.


    @ Demonstrações online

  Front-End(Vercel): https://lista-de-contatos-crud-rust.vercel.app
  Back-End(Render): https://json-server-listadecontatoscrud.onrender.com/contacts


    @ Rodar o projeto localmente

  git clone https://github.com/DeivithMaciel/lista-de-contatos-CRUD.git

  npm install

  npm start

  npm run server (opcional para rodar localmente)


    @ Funções do Projeto

  Criar contatos, remove-los e edita-los(Nome e Email).
  Marcar e desmarcar como favoritos(favoritos tem prioridade no topo).
  Dados conectados á uma BackEnd(não os perde com F5).
  Durante Loadings(carregamento), feedbacks são emitidos.
  Exibe mensagens de sucesso/erro.


    @Tecnologias utilizadas

  *Front-End

    ° React 18

    ° Typescript

    ° Context API

    ° Styled-components

    ° Fetch API

    ° Vercel

  *BackEnd

    ° json-server

    ° Render


    @ Estrutura do projeto

  src/
    components/
      Header
      ContactCard
      ContactForm
    Context/
      ContactsContext.tsx
    Pages/
      Home
    Types/
      Contact.ts
    Styles/

  Cada component e page tem um index.tsx e um style.ts.


    @ A arquitetura do fluxo de dados

    *O Context centraliza:

      ° lista de contatos

      ° estado do loading

      °mensagens de feedback

      ° funções do CRUD(editar e etc)

    Os componentes consomem o contexto via useContacts()

    Todas as operações de criação, edição, remoção e favoritos chamam o API REST e
  atualizam o estado global.


    AUTOR

  Desenvolvido por: Deivith Maciel
  Engenheiro Front-end formado pela EBAC.


    Observações

  Projeto desenvolvido com foco aprendizado para simular um ambiente real de atuação,
com frontend integrado com backend.
  Facil adaptamento para consumir um API real em Node, Nest e outros backends.
