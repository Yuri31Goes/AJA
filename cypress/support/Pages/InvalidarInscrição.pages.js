import { InvalidarIscriçãoELEMENTS as I } from "../Elements/InvalidarInscrição.elements";

    class InvalidarInscrição{
      
        AcessarInvalidarInscrição(){
            cy.get(I.linkInvalidarInscrição).click()
        }
        ConsultarCandidatos(dado){
            cy.get(I.inputCpf).type(dado.inputCPF)
            cy.get(I.btnConsultarCandidatos).click()
        }
        AbrirInscrição(){
            cy.get(I.btnAbrirInscrição).click()
        }
        ClicarInvalidarInscrição(){
            cy.get(I.btnInvalidarInscrição).click()
            cy.get(I.btnConfirmar).click()
        }
        ValidarMensagemInvalidar(){
            cy.get(I.mensagem).should('have.text','Inscrição invalidada com sucesso!')
        }
    }export default new InvalidarInscrição()

