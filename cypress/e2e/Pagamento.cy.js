import PagamentoPages from "../support/Pages/Pagamento.pages"



describe('Cadastro de Beneficiário', () => {

  beforeEach( () => {

    cy.visit('http://172.16.0.229:8080/aja/login.xhtml')
    PagamentoPages.Login('13809921092','123456')
    

    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes('PrimeFacesExt is not defined')) {
        return false;
      }
    });
    
  })
  it('Cadastro Válido de Beneficiários ', () => {
   
    cy.fixture('PagamentoDados').then((dados) => {
    PagamentoPages.InformaçõesBeneficiário(dados)
   
  })

  PagamentoPages.AdicionarOrgãoPagador('1')

  
  

  })


})