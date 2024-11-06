import { IncriçãoElements as inscrição } from "../Elements/Inscrição.elements"
import { CandidaturaElements as candidatura } from "../Elements/Inscrição.elements"
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

    Login(CPF,senha){
        cy.get(inscrição.formCPF).type(CPF) 
        cy.get(inscrição.formSenha).type(senha)
        cy.get(inscrição.BotãoEntrar).click()
        cy.wait(1000)
        cy.get(inscrição.formCPF).type(CPF) 
        cy.get(inscrição.formSenha).type(senha)
        cy.get(inscrição.BotãoEntrar).click()
    }

    AnexarDocumenação(DadosCadastro){
     
      cy.get(candidatura.NavEnvio).click()
      cy.get(candidatura.FormNome).type(DadosCadastro.Nome)
      cy.get(candidatura.FormMãe).type(DadosCadastro.NomeDamãe)
      cy.get(candidatura.FormRG).type(DadosCadastro.RG)
      cy.get(candidatura.FormNIS).type(DadosCadastro.NIS)
      cy.get(candidatura.FormTel).type(DadosCadastro.Telefone)
      cy.get(candidatura.BtnMuni).select(DadosCadastro.Município)
      cy.get(candidatura.FormEndereço).type(DadosCadastro.Endereço)
      cy.get(candidatura.FormNumEndereço).type(DadosCadastro.Número)
      cy.get(candidatura.FormComplemento).type(DadosCadastro.Complemento)
      cy.get(candidatura.FormBairro).type(DadosCadastro.Bairro)
      cy.get(candidatura.FormCep).type(DadosCadastro.Cep)
      cy.get(candidatura.NisUapload).selectFile('Teste.txt')



    }

} export default new InscriçãoPages()