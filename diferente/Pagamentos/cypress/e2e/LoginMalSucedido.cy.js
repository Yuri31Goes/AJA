import Pages from "../support/Pages/Login.pages"
describe('template spec', () => {

  beforeEach(()=>{
    cy.visit('http://172.16.0.229:8080/aja/login.xhtml')
   
  })
  it('CT6.001 - Insiro CPF Inválido e Senha Válida', () => {
     
    Pages.Realizar_Login(1234555555,123456)
  })

  it('CT6.002 - Insiro CPF Inválido e Senha Válida', () => {
     
    Pages.Realizar_Login(13809921092,12345678)
  })

  it('CT6.003 - Campo CPF em branco e Senha Válida', () => {
     
    Pages.Realizar_Login(' ','12345678')
  })

  it('CT6.004 - Campo CPF Válido e Senha em branco ', () => {
     
    Pages.Realizar_Login('13809921092',' ')
  })

  it('CT6.005 - Campo CPF  e Senha em branco ', () => {
     
    Pages.Realizar_Login(' ',' ')
  })




})