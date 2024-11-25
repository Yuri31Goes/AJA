import { LiberarAnáliseELEMENTS as L } from "../Elements/LiberarAnálise.elements";

class LiberarAnálise{

   AcessarLiberarAnálise(){
    cy.get(L.linkLiberarAnálise).click()
   }
   ConsultarCandidatos(dados){
   cy.get(L.inputCPF).type(dados.inputCpf)
    cy.get(L.btnConsultarCandidatos).click()
   }
   AbrirInscrição(){
    cy.get(L.btnAbrirInscrição).click()
   }
   ClicarbtnLiberarAnálise(){
    cy.get(L.selectAvaliador).select('Avaliador 01')
    cy.get(L.inputMotivoLiberação).type('teste')
    cy.get(L.btnLiberarAnálise).click()
    cy.get(L.btnConfirm).click()
   }
   ValidarMensagem(){
      cy.get(L.mensagem).should('have.text','Inscrição Liberada para avaliação com sucesso!')
   }

}export default new LiberarAnálise()