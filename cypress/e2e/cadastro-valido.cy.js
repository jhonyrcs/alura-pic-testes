import Cadastro from '../support/pages/cadastro/pagina-cadastro'

describe('Página de cadastro', () => {
  
  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
  })
  
    it('Preencher campos do formulário corretamente para cadastrar novo usuário', () => {
      Cadastro.acessarPaginaDeCadastro();
      Cadastro.preencherFormulario();
      Cadastro.submeterFormulario();
    })
})