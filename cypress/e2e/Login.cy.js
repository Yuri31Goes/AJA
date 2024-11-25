import LoginPages from "../support/Pages/Login.pages"
describe('Login do usuário no sistema', () => {

  const DadosLogin = {
    CPF:'031.096.830-59',
    Senha:'123456',
    CPFInválido:'031.096.830-',
    SenhaInválida:'1234'
  }
  describe('Login com Credenciais Válidas', () => {
  it('DADO que estou na tela de Login ', () => {
    cy.visit("http://172.16.0.229:8080/aja-participacao/login.xhtml")
   })
  it('QUANDO Realizo Login Válido', () => { 
    LoginPages.RealizarLogin(DadosLogin)
  })
  it('ENTÃO o usuário é redirecionado para tela home do sistema de acordo com o seu perfil', () => {
    LoginPages.ValidarLogin()
  })  

 })

 describe('Login com Credenciais Inválidas ', () => {

  it('DADO que estou na tela de Login', () => {
    cy.visit("http://172.16.0.229:8080/aja-participacao/login.xhtml")
  })
  it('QUANDO Digito CPF inválido', () => {
    LoginPages.DigitarCPFInválido(DadosLogin)
    LoginPages.DigitarSenha(DadosLogin)
    LoginPages.ClicarbtnEntrar()
  })
  it('ENTÃO aparece Mensagem Informativa', () => {
    LoginPages.ValidarCPFInválido()
  })
  it('QUANDO Digito Senha inválida', () => {
    LoginPages.LimparLabels()
    LoginPages.DigitarCPF(DadosLogin)
    LoginPages.DigitarSenhaInválida(DadosLogin)
    LoginPages.ClicarbtnEntrar()
  })
  it('ENTÃO aparece Mensagem Informativa', () => {
    LoginPages.ValidarSenhaInválida()
  })
 })

 describe('Login com Campos em Branco', () => {
  it('DADO que estou na tela de Login', () => {
    cy.visit("http://172.16.0.229:8080/aja-participacao/login.xhtml")
  })
  it('QUANDO Não Digito CPF', () => {
   LoginPages.DigitarSenha(DadosLogin)
  })
  it('E Clico em Entrar', () => {
    LoginPages.ClicarbtnEntrar()
  })
  it('ENTÃO Aparece uma mensagem informativa do campo que não foi digitado ', () => {
  })
  it('QUANDO Não Digito a Senha', () => {
    LoginPages.DigitarCPF(DadosLogin)
   })
   it('E Clico em Entrar', () => {
     LoginPages.ClicarbtnEntrar()
   })
   it('ENTÃO Aparece uma mensagem informativa do campo que não foi digitado ', () => {
   })
   it('QUANDO Não Digito CPF e Senha', () => {
    LoginPages.LimparLabels()
   })
   it('E Clico em Entrar', () => {
     LoginPages.ClicarbtnEntrar()
   })
   it('ENTÃO Aparece uma mensagem informativa do campo que não foi digitado ', () => {
   })

 })


})
