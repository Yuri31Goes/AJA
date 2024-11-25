import { InvalidarIscriçãoELEMENTS as I } from "../Elements/InvalidarInscrição.elements";

    class InvalidarInscrição{
      
        AcessarInvalidarInscrição(){
            cy.get(I.linkInvalidarInscrição).click()
        }
        ConsultarCandidatos(){
            cy.get(I.btnConsultarCandidatos).click()
        }
        AbrirInscrição(){
            cy.get(I.btnAbrirInscrição).click()
        }
        ClicarInvalidarInscrição(){
            cy.get(I.btnInvalidarInscrição).click()
        }
    }export default new InvalidarInscrição()

