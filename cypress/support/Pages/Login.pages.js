import { LoginELEMENTS as L } from "../Elements/Login.elements";

class Login{

    RealizarLogin(Dados){
        cy.get(L.inputLogin).type(Dados.CPF)
        cy.get(L.inputSenha).type(Dados.Senha)
        cy.get(L.btnEntrar).click()
       }
       DigitarCPF(Dados){
        cy.get(L.inputLogin).type(Dados.CPF)
       }
       DigitarCPFInválido(Dados){
        cy.get(L.inputLogin).type(Dados.CPFInválido)
       }
       DigitarSenha(Dados){
        cy.get(L.inputSenha).type(Dados.Senha)
       }
       DigitarSenhaInválida(Dados){
        cy.get(L.inputSenha).type(Dados.SenhaInválida)
       }
       ClicarbtnEntrar(Dados){
        cy.get(L.btnEntrar).click()
       }
       ValidarLogin(){
        cy.get(L.modalLogin).should('exist')
       }
       ValidarCPFInválido(){
        cy.get(L.labelMensagem).should('have.text','CPF não cadastrado.')
       }
       LimparLabels(){
        cy.get(L.inputLogin).clear()
        cy.get(L.inputSenha).clear()
       }
       ValidarSenhaInválida(){
        cy.get(L.labelMensagem).should('have.text','Senha inválida.')
       }

}export default new Login()