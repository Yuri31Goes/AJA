import InscriçãoPages from "../support/Pages/Inscrição.pages"

describe('Inscrição Válida', () => {

  beforeEach( () => {
    cy.visit('http://172.16.0.229:8080/aja-edital-inscricao/login.xhtml')
  })
  it('Realizar Incrição válida e validar a incrição', () => {
    

    cy.fixture('InscriçãoDados').then((dados) => {
      InscriçãoPages.CadastrarUsuário(dados)
      InscriçãoPages.ValidarCadastro()
      InscriçãoPages.Login(dados)
    })
  })


})