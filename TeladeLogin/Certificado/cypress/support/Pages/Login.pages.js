import { elements as el } from "../Elements/Login.elements"

class pages{

    Login(Login,Senha){
        cy.get(el.InputLogin).type(Login)
        cy.get(el.InputSenha).type(Senha)
        cy.get(el.ButtonLogin).click()
        
    }


}export default new pages()