import PagamentoPages from "../support/Pages/Pagamento.pages"



describe('Cadastro de Beneficiário', () => {

  beforeEach( () => {

    cy.visit('http://172.16.0.229:8080/aja/login.xhtml')
    PagamentoPages.Login('13809921092','123456')

    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes('PrimeFacesExt is not defined')) {
        return false;
      }
    });
    
  })
  it('Cadastro Válido de Beneficiários ', () => {
   
// Definindo os dados
const Dados = {
  CPF: '123.456.789-00',
  Senha: 'senhaSegura123',
  Nome: 'João da Silva',
  NomeMãe: 'Maria da Silva',
  DataNascimento: '01/01/1980',
  Sexo: '1', // 1 para Masculino, 2 para Feminino
  Município: '1', // 1 para Salvador, 2 para Lauro de Freitas
  Cep: '40000-000',
  Endereço: 'Rua Exemplo',
  NumEndereço: '123',
  Complemento: 'Apto 101',
  Bairro: 'Centro'
};

// Chama o método passando a constante Dados como parâmetro
PagamentoPages.AdicionarBeneficiário(Dados);
    
  })


})