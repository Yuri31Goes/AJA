import InvalidarInscriçãoPages from "../support/Pages/InvalidarInscrição.pages"
import LoginPages from "../support/Pages/Login.pages"
describe('Invalidar Inscrição', () => {

  const dados = {
    CPF:'494.322.730-91',
    Senha:'123456',
    //Altere o CPF para invalidar a inscrição
    inputCPF:'359.117.480-70'
  }
describe('Invalidar Inscrição do candidato   ', () => {
  it('DADO que estou na tela de Invalidar Inscrição', () => {
    cy.visit("http://172.16.0.229:8080/aja-participacao/login.xhtml")
    LoginPages.RealizarLogin(dados)
    InvalidarInscriçãoPages.AcessarInvalidarInscrição()
  })
  it('QUANDO Consulto candidatos', () => {
    InvalidarInscriçãoPages.ConsultarCandidatos(dados)
  })
  it('E Abro a Inscrição do candidato', () => {
     InvalidarInscriçãoPages.AbrirInscrição()
  })
  it('E Invalido a sua Inscrição', () => {
    InvalidarInscriçãoPages.ClicarInvalidarInscrição()
  })
  it('ENTÃO o sistema informa uma mensagem que o candidato foi invalidada ', () => {
    InvalidarInscriçãoPages.ValidarMensagemInvalidar()
  })
 }) 
})