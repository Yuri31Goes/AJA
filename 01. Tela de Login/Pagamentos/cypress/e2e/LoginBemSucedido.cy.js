import Pages from "../support/Pages/Login.pages"

describe('Login Bem Sucedido ', () => {

  beforeEach(()=>{
    cy.visit('http://172.16.0.229:8080/aja/login.xhtml')
   
  })

  it('CT1.001 - Realizo login com Perfil Administrador ', () => {
    
    Pages.Realizar_Login('03109683059', 123456)
   
  })

  it(' CT2.001 - Realizo login com Perfil Analista ', () => {
    
    Pages.Realizar_Login('98946716088', 123456)
   
  })

  it(' CT3.001 - Realizo login com Perfil Gerente ', () => {
    
    Pages.Realizar_Login('13809921092', 123456)
   
  })

  it.only(' CT4.001 - Realizo login com Perfil Consultor ', () => {
    
    Pages.Realizar_Login('99476205067', 123456)
   
  })


})