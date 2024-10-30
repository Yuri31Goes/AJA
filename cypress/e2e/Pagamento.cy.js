import PagamentoPages from "../support/Pages/Pagamento.pages"



describe('Cadastro de Beneficiário', () => {

  beforeEach( () => {

    cy.visit('http://172.16.0.229:8080/aja/login.xhtml')
    
  })
  it('Cadastro Válido de Beneficiários ', () => {
   
    PagamentoPages.Login('13809921092','123456')
    
  })


})