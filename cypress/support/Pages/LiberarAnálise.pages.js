import { LiberarAnáliseELEMENTS as L } from "../Elements/LiberarAnálise.elements";

class LiberarAnálise{

   AcessarLiberarAnálise(){
    cy.get(L.linkLiberarAnálise).click()
   }
   ConsultarCandidatos(){
    cy.get(L.btnConsultarCandidatos).click()
   }
   AbrirInscrição(){
    cy.get(L.btnAbrirInscrição).click()
   }
   ClicarbtnLiberarAnálise(){
    cy.get(L.btnLiberarAnálise).click()
   }

}export default new LiberarAnálise()