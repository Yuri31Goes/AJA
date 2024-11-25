import PossePages from "../support/Pages/Posse.pages"
import LoginPages from "../support/Pages/Login.pages"

describe('Avaliar Posse Candidato', () => {

  const DadosLogin = {
    CPF:'138.099.210-92',
    Senha:'123456',
  }
  describe('Aprovar Posse ', () => {
  it('DADO que estou na tela de Gerenciar Posse', () => {
    cy.visit("http://172.16.0.229:8080/aja-participacao/login.xhtml")
    LoginPages.RealizarLogin(DadosLogin)
    PossePages.AcessarGerenciarPosse()
   })
   it('QUANDO Consulto os candidatos', () => {
     PossePages.ConsultarCandidatos()
  })
  it('E Clico em Abrir Cadastro de candidatos com a Posse "Não Anexada" ', () => {
    PossePages.AbrirCadastro()
  })
  it('E Anexo o termo de Posse ', () => {
    PossePages.AnexarPosse()
  })
  it('E Aprovo a Posse do candidato', () => {
    PossePages.AprovarPosse()
  })
  it('ENTÃO Aparece uma mensagem informando que a posse do candidato foi aprovada', () => {
    PossePages.ValidarAprovação()
  })

 })
 describe.only('Reprovar Posse ', () => {
  it('DADO que estou na tela de Gerenciar Posse', () => {
    cy.visit("http://172.16.0.229:8080/aja-participacao/login.xhtml")
    LoginPages.RealizarLogin(DadosLogin)
    PossePages.AcessarGerenciarPosse()
   })
   it('QUANDO Consulto os candidatos', () => {
     PossePages.ConsultarCandidatos()
  })
  it('E Clico em Abrir Cadastro de candidatos com a Posse "Não Anexada" ', () => {
    PossePages.AbrirCadastro()
  })
  it('E Anexo o termo de Posse ', () => {
    PossePages.AnexarPosse()
  })
  it('E Reprovo a Posse do candidato  ', () => {
    PossePages.ReprovarPosse()
  })
  it('ENTÃO Aparece uma mensagem informando que a posse do candidato foi Reprovada  ', () => {
    PossePages.ValidarReprovação()
  })

 })

})