
import LoginPages from "../support/Pages/Login.pages"
describe('Login Bem Sucedido', () => {

  beforeEach(()=>{
    cy.visit('http://172.16.0.229:8080/aja-certificado-web/login.xhtml')
   
  })
  it('Login com Perfil ADM', () => {
    LoginPages.Login('031.096.830-59', '123456')
  })
})