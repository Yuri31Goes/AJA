import { PagementosElemens as Pagamentos } from "../Elements/Pagamento.elements";

class PagesPagamentos{

    Login(CPF,Senha){
        cy.get(Pagamentos.CPF).type(CPF)
        cy.get(Pagamentos.Senha).type(Senha)
        cy.get(Pagamentos.BotãoEntrar).click()
    }

 InformaçõesBeneficiário(dados) {
    cy.get(Pagamentos.BotãoBeneficiários).click()
    cy.get(Pagamentos.SelectBeneficiário).click()
    cy.get(Pagamentos.BotãoNovoBeneficiário).click()
    cy.get(Pagamentos.FormCPF).type(dados.CPF)
    cy.get(Pagamentos.FormmeNome).type(dados.Nome) 
    cy.get(Pagamentos.FormeNomeMãe).type(dados.NomeMãe)
    cy.get(Pagamentos.FormDatadeNascimento).type(dados.DataNascimento)
    cy.get(Pagamentos.Página).click()
    cy.get(Pagamentos.FormSexobtn).click()
    cy.get(Pagamentos.getSexo(dados.Sexo)).click()
    cy.get(Pagamentos.FormMunibtn).click();
    cy.get(Pagamentos.getMunicipio(dados.Município)).click();
    cy.get(Pagamentos.FormCEP).type(dados.Cep);
    cy.get(Pagamentos.FormEndereço).type(dados.Endereço);
    cy.get(Pagamentos.FormNumeroEndereço).type(dados.NumEndereço);
    cy.get(Pagamentos.FormComplemento).type(dados.Complemento);
    cy.get(Pagamentos.FormBairrro).type(dados.Bairro);
    
  }

  SalvarCadastro(){
    cy.get(Pagamentos.Salvar).click()
  }

  AdicionarOrgãoPagador(number){
    cy.get(Pagamentos.AbaOrgão).click()
    cy.get(Pagamentos.BotãoAddOrgão).click()
    cy.get(Pagamentos.BotãoSelOrgão).click()
    cy.get(Pagamentos.SelOrgão(number)).click()
    cy.get(Pagamentos.AdicionarOrgão).click()
    //cy.get(Pagamentos.SalvarOrgão).click()
  }

  ValidarCadastro(){
    cy.get(Pagamentos.Mensagem).should('be.visible')  }

}export default new PagesPagamentos()