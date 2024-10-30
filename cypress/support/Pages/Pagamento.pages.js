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
    }


}export default new PagesPagamentos()