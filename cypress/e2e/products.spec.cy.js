import {
  adicionarAoCarrinho,
  adicionarQuantidade,
  fecharPedido,
  verificarCarrinho,
} from '../support/functions/buy/buyProduct';
import {
  pesquisarProdutos,
  validarPesquisaProduto,
} from '../support/functions/search/searchProducts';

describe('Testes em produtos amazon', () => {
  it('Procura o produto e abre o anúncio', () => {
    cy.visit('https://www.amazon.com.br/');

    pesquisarProdutos(); //Se estiver vazio os parâmetros ele vai ler da lista de produtos. Se não, ele vai aplicar o que está no parâmetro

    cy.fixture('listProducts').as('listaProdutos');
    cy.get('@listaProdutos').then((dados) => {
      validarPesquisaProduto(dados.especificacao, dados.especificacao2); //Se estiver vazio os parâmetros ele vai ler da lista de produtos. Se não, ele vai aplicar o que está no parâmetro
    });
  });

  it('Adiciona produtos ao carrinho', () => {
    cy.visit('https://www.amazon.com.br/');

    pesquisarProdutos(); //Se estiver vazio os parâmetros ele vai ler da lista de produtos. Se não, ele vai aplicar o que está no parâmetro

    cy.fixture('listProducts').as('listaProdutos');
    cy.get('@listaProdutos').then((dados) => {
      validarPesquisaProduto(dados.especificacao1, dados.especificacao2); //Se estiver vazio os parâmetros ele vai ler da lista de produtos. Se não, ele vai aplicar o que está no parâmetro
    });

    cy.fixture('listProducts').as('listaProdutos');
    cy.get('@listaProdutos').then((dados) => {
      adicionarQuantidade(dados.quantidade); //Se estiver vazio os parâmetros ele vai ler da lista de produtos. Se não, ele vai aplicar o que está no parâmetro
    });

    adicionarAoCarrinho();

    pesquisarProdutos('Alexa');
    validarPesquisaProduto('Echo', 'Preto');
    adicionarQuantidade('1');
    adicionarAoCarrinho();
  });

  it.only('Adiciona produtos ao carrinho e finaliza a compra', () => {
    cy.visit('https://www.amazon.com.br/');

    pesquisarProdutos(); //Se estiver vazio os parâmetros ele vai ler da lista de produtos. Se não, ele vai aplicar o que está no parâmetro

    cy.fixture('listProducts').as('listaProdutos');
    cy.get('@listaProdutos').then((dados) => {
      validarPesquisaProduto(dados.especificacao1, dados.especificacao2); //Se estiver vazio os parâmetros ele vai ler da lista de produtos. Se não, ele vai aplicar o que está no parâmetro
    });

    cy.fixture('listProducts').as('listaProdutos');
    cy.get('@listaProdutos').then((dados) => {
      adicionarQuantidade(dados.quantidade); //Se estiver vazio os parâmetros ele vai ler da lista de produtos. Se não, ele vai aplicar o que está no parâmetro
    });

    adicionarAoCarrinho();

    /* pesquisarProdutos('Alexa');
    validarPesquisaProduto('Echo', 'Preto');
    adicionarQuantidade('1');
    adicionarAoCarrinho();*/

    cy.fixture('clientDatas').as('dadosClientes');
    cy.get('@dadosClientes').then((dados) => {
      fecharPedido(true, '', ''); //Se estiver vazio os parâmetros ele vai ler da lista de produtos. Se não, ele vai aplicar o que está no parâmetro
    });
  });
});
