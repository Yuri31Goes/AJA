import { PagementosElemens as Pagamentos } from "../Elements/Pagamento.elements";

class PagesPagamentos{

    Login(CPF,Senha){
        cy.get(Pagamentos.CPF).type(CPF)
        cy.get(Pagamentos.Senha).type(Senha)
        cy.get(Pagamentos.BotãoEntrar).click()
    }


}export default new PagesPagamentos()