import AvaliarDocPages from "../support/Pages/AvaliarDoc.pages"
import LoginPages from "../support/Pages/Login.pages"

describe.only('Avaliar Documentação do Candidato', () => {
  const DadosLogin = {
    CPF:'138.099.210-92',
    Senha:'123456',
  }
  const Situação = {
    Aprovado:'Aprovado',
    Reprovado:'Reprovado'
  }
  const dados = {
    CPF:'288.439.131-23	'	
  }
describe.only('Aprovar Documentação', () => {
  it('DADO que estou na tela de Gerenciar Candidatos', () => {
    cy.visit('http://172.16.0.229:8080/aja-participacao/login.xhtml')
    LoginPages.RealizarLogin(DadosLogin)
    AvaliarDocPages.AcessarGerenciarCandidatos()
  })
  it('QUANDO Consulto um candidato com Status “Aguardando Análise”', () => {
     AvaliarDocPages.ConsultarCandidato(dados)
  })
  it('E Abro a Inscrição do candidato', () => {
    AvaliarDocPages.AbrirInscrição()
 })
 it('E Aprovo toda documentação', () => {
  AvaliarDocPages.AprovarDocumentação(Situação)
})
it('E Clico em Aprovar', () => {
   AvaliarDocPages.ClicarAprovar()
})
it('ENTÃO o sistema informa uma mensagem que o candidato foi Aprovado', () => {
  AvaliarDocPages.ValidarMensagemAprovado()
})   
})
describe('Reprovar Documentação', () => {
  it('DADO que estou na tela de Gerenciar Candidatos', () => {
    cy.visit('http://172.16.0.229:8080/aja-participacao/login.xhtml')
    LoginPages.RealizarLogin(DadosLogin)
    AvaliarDocPages.AcessarGerenciarCandidatos()
  })
  it('QUANDO Consulto um candidato com Status “Aguardando Análise”', () => {
     AvaliarDocPages.ConsultarCandidato(dados)
  })
  it('E Abro a Inscrição do candidato', () => {
    AvaliarDocPages.AbrirInscrição()
  })
 it('E Reprovo toda documentação', () => {
  AvaliarDocPages.ReprovarDocumentação(Situação)
  })
it('E Clico em Reprovar', () => {
   AvaliarDocPages.ClicarReprovar()
  })
it('ENTÃO o sistema informa uma mensagem que o candidato foi Reprovado', () => {
  AvaliarDocPages.ValidarMensagemReprovado()
  })  
}) 
})