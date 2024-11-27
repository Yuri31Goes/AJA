import InscriçãoProgramaPages from "../support/Pages/InscriçãoPrograma.pages"
import LoginPages from "../support/Pages/Login.pages"
describe(' Inscrição do Candidato no Programa ', () => {
describe(' Inscrição válida de Candidato no Programa', () => {

  const DadosLogin = {
    CPF:'878.133.142-80',
    Senha:'123456',
  }
  const DadosCadastro = {
    Nome: 'João Silva (Teste Yuri - 01)',
    NomeMãe: 'Maria Silva',
    RG: '123456789',
    NIS: '12345678901',
    Telefone: '(71) 98765-4321',
    Município: 'Salvador',
    Endereço: 'Rua das Flores',
    Número: '123',
    Complemento: 'Apto 45',
    Bairro: 'Centro',
    CEP: '01001-000'
  }
  const Documentos = {
    NIS:'Teste.png',
    CPF:'Teste.png',
    Comprovante:'Teste.png',
    tresxquatro:'Teste.png',
    RGVerso:'Teste.png',
    RGFrente:'Teste.png',
    Autodeclaração:'Teste.png',
  }
  it('DADO que estou na tela de envio da documentação', () => {
    cy.visit('http://172.16.0.229:8080/aja-participacao/login.xhtml')
    LoginPages.RealizarLogin(DadosLogin)
    InscriçãoProgramaPages.AcessarEnviodeDocumentação()
  })
  it('QUANDO insiro os campos de cadastro ', () => {
     InscriçãoProgramaPages.DigitarCamposdeCadastro(DadosCadastro)
  })
  it('E insiro a documentação ', () => {
    InscriçãoProgramaPages.InserirDocumentaçãoCadastro(Documentos)
  })
  it('E clico no salvamento das informações', () => {
    InscriçãoProgramaPages.ClicarcheckboxDeclaração()
    InscriçãoProgramaPages.ClicarbtnEnviar()
  })
  it('ENTÃO o sistema informa uma mensagem sobre candidatura enviada', () => {
    InscriçãoProgramaPages.ValidarInscrição()
  })
  it('E é gerado um código de inscrição', () => {
    InscriçãoProgramaPages.ValidarCodigoInscrição()
  })
  it('E  o usuário é pode exportar as informações em PDF', () => {
    InscriçãoProgramaPages.ClicaremExportarPDF()
  })
})





 
})