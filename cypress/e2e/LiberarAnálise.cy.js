import LiberarAnálisePages from "../support/Pages/LiberarAnálise.pages"
import LoginPages from "../support/Pages/Login.pages"

describe('Liberar Análise do candidato  ', () => {

  const dados = {
    CPF:'494.322.730-91',
    Senha:'123456',
    inputCpf:'288.439.131-23'
  }
describe('Liberar Análise do candidato   ', () => {
  it('DADO que estou na tela de Liberar Análise', () => {
    cy.visit("http://172.16.0.229:8080/aja-participacao/login.xhtml")
    LoginPages.RealizarLogin(dados)
    LiberarAnálisePages.AcessarLiberarAnálise()
  })
  it('QUANDO Consulto candidatos', () => {
    LiberarAnálisePages.ConsultarCandidatos(dados)
  })
  it('E Abro a Inscrição do candidato', () => {
    LiberarAnálisePages.AbrirInscrição()
  })
  it('E Libero a Análise do candidato', () => {
    LiberarAnálisePages.ClicarbtnLiberarAnálise()
  })
  it('ENTÃO o sistema informa uma mensagem que a inscrição do candidato foi liberada para análise', () => { 
    LiberarAnálisePages.ValidarMensagem()
  }) 
})  
})