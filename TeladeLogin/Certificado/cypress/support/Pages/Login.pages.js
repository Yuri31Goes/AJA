import { Elements as el } from "../../../../Pagamentos/cypress/support/Elements/Login.elements";

class pages{

    Login(Login,Senha){
        cy.get('#inputLogin').type(Login)
        cy.get('#inputSenha').type(Senha)
    }


}export default new pages()