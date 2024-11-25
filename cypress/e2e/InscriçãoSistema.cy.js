import InscriçãoSistemaPages from "../support/Pages/InscriçãoSistema.pages"

describe(' Inscrição do Candidato no Sistema ', () => {

describe('Inscrição Válida de Candidato no sistema ', () => {
  const DadosCadastroSistema = {
    Email:'testes01aja@gmail.com',
    CPF:'528.145.481-15',
    DataNascimento:'10/06/2000',
    Senha:'123456'
 }
  it('DADO que estou na tela de cadastro do candidato ', () => {
    //URL antiga até resolução do Bug
    cy.visit('http://172.16.0.229:8080/aja-participacao/login.xhtml')
    InscriçãoSistemaPages.ClicarbtnCadastroUsuário()
  })
  it('QUANDO insiro os campos de cadastro  ', () => {
    InscriçãoSistemaPages.DigitarCamposCadastro(DadosCadastroSistema)
  })
  it('E Clico em salvar', () => {
    InscriçãoSistemaPages.CLicarbtnSalvar()
  })
  it('ENTÃO o sistema informa uma mensagem sobre o cadastro ', () => {
    InscriçãoSistemaPages.VerificarMensagemdeCadastro()
  })
  it('E  o usuário é redirecionado para tela de login', () => {
    InscriçãoSistemaPages.VerificarRedrecionamentoLogin()
  })
 })  
})