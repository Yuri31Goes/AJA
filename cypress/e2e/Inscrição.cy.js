import InscriçãoPages from "../support/Pages/Inscrição.pages"
describe('Inscrição no sistema', () => {

  beforeEach( () => {
    cy.visit('http://172.16.0.229:8080/aja-edital-inscricao/login.xhtml')
  })
  it('Realizar Incrição válida e validar a incrição', () => {
    

    cy.fixture('InscriçãoDados').then((dados) => {
      InscriçãoPages.CadastrarUsuário(dados)
      InscriçãoPages.ValidarCadastro()
    })
  })


})

describe.only('Anexar Arquivos e Enviar inscrição', () => {

  beforeEach( () => {
    cy.visit('http://172.16.0.229:8080/aja-edital-inscricao/login.xhtml')
    InscriçãoPages.Login("628.031.624-66", "123456")
  })

  const DadosCadastro = {
     Nome:'Teste 001',
     NomeDamãe:'Mãe 001',
     RG:'1111111111111111111111111',
     NIS:'11111111111',
     Telefone:'(71) 99999-9999',
     Município:'Salvador',
     Endereço:'Travessa Teste 01',
     Número:'01',
     Complemento:'Em Frete ao Mercado',
     Bairro:'Imbuí',
     Cep:'40000000',

  }
  it('Realizar Incrição válida e validar a incrição', () => {
    
    InscriçãoPages.AnexarDocumenação(DadosCadastro)
  })


})
