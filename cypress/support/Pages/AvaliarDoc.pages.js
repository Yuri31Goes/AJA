import { AvaliarDocELEMENTS as doc } from "../Elements/AvaliarDoc.elements"

class AvaliarDocPages{

       AcessarGerenciarCandidatos(){
        cy.get(doc.linkCandidatos).click()
       }
       ConsultarCandidato(dados){
        cy.get(doc.selectStatusCandidato).select('Aguardando Análise')
        cy.get(doc.inputCpf).type(dados.CPF)
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
        cy.get(doc.selectMotivo1).select('DOCUMENTO INVÁLIDO')
        cy.get(doc.selectMotivo2).select('DOCUMENTO INVÁLIDO')
        cy.get(doc.selectMotivo3).select('DOCUMENTO INVÁLIDO')
        cy.get(doc.selectMotivo4).select('DOCUMENTO INVÁLIDO')
        cy.get(doc.selectMotivo5).select('DOCUMENTO INVÁLIDO')
        cy.get(doc.selectMotivo6).select('DOCUMENTO INVÁLIDO')
        cy.get(doc.selectMotivo7).select('DOCUMENTO INVÁLIDO')
       
       }
       ClicarAprovar(){
        cy.get(doc.btnAprovar).click()
        cy.get(doc.btnConfirm).click()
       }
       ClicarReprovar(){
        cy.get(doc.btnReprovar).click()
        cy.get(doc.btnConfirm).click()
       }
       ValidarMensagemAprovado(){
        cy.get(doc.labelMensagem).should('have.text','Documentação aprovada com sucesso!')
       }
       ValidarMensagemReprovado(){
       cy.get(doc.labelMensagem).should('have.text','Documentação reprovada com sucesso!')
       }

  




}export default new AvaliarDocPages()