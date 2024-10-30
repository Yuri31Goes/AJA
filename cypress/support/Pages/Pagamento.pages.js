import { PagementosElemens as Pagamentos } from "../Elements/Pagamento.elements";

class PagesPagamentos{

    Login(CPF,Senha){
        cy.get(Pagamentos.CPF).type(CPF)
        cy.get(Pagamentos.Senha).type(Senha)
        cy.get(Pagamentos.BotãoEntrar).click()
    }

    AdicionarBeneficiário(CPF, Nome,NomeM,Datadenascimento,Sexo,Município){
        cy.get(Pagamentos.BotãoBeneficiários).click()
        cy.get(Pagamentos.SelectBeneficiário).click()
        cy.get(Pagamentos.BotãoNovoBeneficiário).click()
        cy.get(Pagamentos.FormCPF).type(CPF)
        cy.get(Pagamentos.FormmeNome).type(Nome)
        cy.get(Pagamentos.FormeNomeMãe).type(NomeM)
        cy.get(Pagamentos.FormDatadeNascimento).type(Datadenascimento)
        cy.get(Pagamentos.FormSexobtn).click()
        cy.get(Pagamentos.getSexo(Sexo)).click()
        cy.get(Pagamentos.FormMunibtn).click()
        cy.get(Pagamentos.getMunicipio(Município)).click()
    }


}export default new PagesPagamentos()