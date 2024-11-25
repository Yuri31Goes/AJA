import { AvaliarDocELEMENTS as doc } from "../Elements/AvaliarDoc.elements"

class AvaliarDocPages{

       AcessarGerenciarCandidatos(){
        cy.get(doc.linkCandidatos).click()
       }
       ConsultarCandidato(){
        cy.get(doc.selectStatusCandidato).select('Aguardando Análise')
        cy.get(doc.btnConsultar).click()
       }
       AbrirInscrição(){
        cy.get(doc.btnAbrirInscrição).click()
       }
       AprovarDocumentação(Situação){
        cy.get(doc.selectSituação01).select(Situação.Aprovado)
        cy.get(doc.selectSituação02).select(Situação.Aprovado)
        cy.get(doc.selectSituação03).select(Situação.Aprovado)
        cy.get(doc.selectSituação04).select(Situação.Aprovado)
        cy.get(doc.selectSituação05).select(Situação.Aprovado)
        cy.get(doc.selectSituação06).select(Situação.Aprovado)
        cy.get(doc.selectSituação07).select(Situação.Aprovado)
       }
       ReprovarDocumentação(Situação){
        cy.get(doc.selectSituação01).select(Situação.Reprovado)
        cy.get(doc.selectSituação02).select(Situação.Reprovado)
        cy.get(doc.selectSituação03).select(Situação.Reprovado)
        cy.get(doc.selectSituação04).select(Situação.Reprovado)
        cy.get(doc.selectSituação05).select(Situação.Reprovado)
        cy.get(doc.selectSituação06).select(Situação.Reprovado)
        cy.get(doc.selectSituação07).select(Situação.Reprovado)
       }
       ClicarAprovar(){
        cy.get(doc.btnAprovar).click()
        cy.get(doc.btnConfirm).click()
       }
       ClicarReprovar(){
       // Adicionar Botão Reprovar cy.get(doc.btnAprovar).click()
        cy.get(doc.btnConfirm).click()
       }
       ValidarMensagemAprovado(){
        cy.get(doc.labelMensagem).should('have.text','Documentação aprovada com sucesso!')
       }

  




}export default new AvaliarDocPages()