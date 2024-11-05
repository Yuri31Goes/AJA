import { IncriçãoElements as inscrição } from "../Elements/Inscrição.elements"

class InscriçãoPages{

    CadastrarUsuário(dados){
        cy.get(inscrição.BotãoCadastrar).click()
        cy.wait(1000)
        cy.get(inscrição.BotãoCadastrar).click()
        cy.get(inscrição.formEmail).type(dados.Email)
        cy.get(inscrição.formCPF).type(dados.CPF)
        cy.get(inscrição.formDataNascimento).type(dados.dataN)
        cy.get(inscrição.formSenha).type(dados.senha)
        cy.get(inscrição.formrepetirSenha).type(dados.senha)
        cy.get(inscrição.Salvar).click()


    }

    ValidarCadastro(){
        cy.get(inscrição.Mensagem).should('be.visible')
    }

    Login(dados){
        cy.get(inscrição.formCPF).type(dados.CPF) 
        cy.get(inscrição.formSenha).type(dados.senha)
        cy.get(inscrição.BotãoEntrar).click()
    }

} export default new InscriçãoPages()