import { Elements as el  } from "../Elements/Login.elements";

class Pages {

    Realizar_Login(Login, senha){

        cy.get(el.InputLogin).type(Login)
        cy.get(el.InputSenha).type(senha)
        cy.get(el.ButtonLogin).click()

    }



} export default new Pages()
