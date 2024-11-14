import { InscriçãoProgramaELEMENTS as InscriçãoP } from "../Elements/InscriçãoPrograma.elements"

class InscriçãoPrograma{

   RealizarLogin(Dados){
    cy.get(InscriçãoP.inputLogin).type(Dados.CPF)
    cy.get(InscriçãoP.inputSenha).type(Dados.Senha)
    cy.get(InscriçãoP.btnEntrar).click()
   }

   AcessarEnviodeDocumentação(){
    cy.get(InscriçãoP.btnEnvioDocumentação).click()
   }

   DigitarCamposdeCadastro(Dados){
      cy.get(InscriçãoP.inputNome).clear().type(Dados.Nome)
      cy.get(InscriçãoP.inputNomeMãe).type(Dados.NomeMãe)
      cy.get(InscriçãoP.inputRG).type(Dados.RG)
      cy.get(InscriçãoP.inputNIS).type(Dados.NIS)
      cy.get(InscriçãoP.inputTelefone).type(Dados.Telefone)
      cy.get(InscriçãoP.inputMunicípio).select(Dados.Município)
      cy.get(InscriçãoP.inputEndereço).type(Dados.Endereço)
      cy.get(InscriçãoP.inputNúmero).type(Dados.Número)
      cy.get(InscriçãoP.inputComplemento).type(Dados.Complemento)
      cy.get(InscriçãoP.inputBairro).type(Dados.Bairro)
      cy.get(InscriçãoP.inputCep).type(Dados.CEP)
   }

   InserirDocumentaçãoCadastro(Documentos){
      cy.get(InscriçãoP.inputuaploadNIS).selectFile(Documentos.NIS, {force: true})
      cy.get(InscriçãoP.inputuaploadCPF).selectFile(Documentos.CPF, {force: true})
      cy.get(InscriçãoP.inputuaploadComprovante).selectFile(Documentos.Comprovante, {force: true})
      cy.get(InscriçãoP.inputuapload3x4).selectFile(Documentos.tresxquatro, {force: true})
      cy.get(InscriçãoP.inputuaploadRGVerso).selectFile(Documentos.RGVerso, {force: true})
      cy.get(InscriçãoP.inputuaploadRGFrente).selectFile(Documentos.RGFrente, {force: true})
      cy.get(InscriçãoP.inputuaploadAutodeclaração).selectFile(Documentos.Autodeclaração, {force: true})
   }

   ClicarcheckboxDeclaração(){
    cy.get(InscriçãoP.checkboxDeclaração).click()
   }

   ClicarbtnEnviar(){
    cy.get(InscriçãoP.btnEnviar).click()
    cy.get(InscriçãoP.btnConfimarEnvio).click()
   }

   ValidarInscrição(){
      cy.get(InscriçãoP.liMensage).
      should('exist')
   }

   ValidarCodigoInscrição(){
      cy.get(InscriçãoP.liMensageInscrição).
      should('exist')
   }

} export default new InscriçãoPrograma()