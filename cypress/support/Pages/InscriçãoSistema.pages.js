import { InscriçãoSistemaELEMENTS as InscriçãoS } from "../Elements/InscriçãoSistema.elements"


class InscriçãoSistema {

    ClicarbtnCadastroUsuário(){
        cy.get(InscriçãoS.btnCadastrar).click()
    }

    DigitarCamposCadastro(Dados){
      cy.get(InscriçãoS.inputEmail).type(Dados.Email)
      cy.get(InscriçãoS.inputCPF).type(Dados.CPF)
      cy.get(InscriçãoS.inputDataNascimento).type(Dados.DataNascimento)
      cy.get(InscriçãoS.inputSenha).type(Dados.Senha)
      cy.get(InscriçãoS.inputRepetirSenha).type(Dados.Senha)
    }

    CLicarbtnSalvar(){
        cy.get(InscriçãoS.btnSalvar)
    }
    
    VerificarMensagemdeCadastro(){
    }
    
    VerificarRedrecionamentoLogin(){
        
    }

}export default new InscriçãoSistema()