import { PosseELEMENTS as P } from "../Elements/Posse.elements";

class Posse{

    AcessarGerenciarPosse(){
        cy.get(P.linkGerenciarPosse).click()
        cy.get(P.spanEdital).click()
    }
    ConsultarCandidatos(){
        cy.get(P.selectStatus).select('Não Anexado')
        cy.get(P.btnConsultarCandidatos).click()
    }
    AbrirCadastro(){
        cy.get(P.linkAbrirCadastro).click()
   }
   AnexarPosse(){
    cy.get(P.inputPosse).selectFile('Teste.png',{force: true} )
   }
   AprovarPosse(){
    cy.get(P.selectSituação).select('Aprovado')
    cy.get(P.btnAprovar).click()
    cy.get(P.btnConfirm).click()
   }
   ReprovarPosse(){
    cy.get(P.selectSituação).select('Reprovado')
    cy.get(P.selectMotivo).select('DOCUMENTO INVÁLIDO')
    cy.get(P.btnReprovar).click()
    cy.get(P.btnConfirm).click()
   }
   ValidarAprovação(){
    cy.get(P.textMensagem).should('have.text','Documentação aprovada com sucesso!')
   }
   ValidarReprovação(){
    cy.get(P.textMensagem).should('have.text','Documentação reprovada com sucesso!')
   }
        
    
 

} export default new Posse()