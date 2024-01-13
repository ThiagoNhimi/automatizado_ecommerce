import { adicionarAoCarrinho, adicionarQuantidade } from "../support/functions/buy/buyProduct";
import { pesquisarProdutos, validarPesquisaProduto } from "../support/functions/search/searchProducts"

describe('Testes em produtos amazon', () => {
  it('Procura o produto e abre o anúncio', () => {
    cy.visit('https://www.amazon.com.br/');
    
    pesquisarProdutos(); //Se estiver vazio os parâmetros ele vai ler da lista de produtos. Se não, ele vai aplicar o que está no parâmetro

    cy.fixture('listProducts').as('listaProdutos');
    cy.get('@listaProdutos').then((dados) => {
      validarPesquisaProduto(dados.especificacao, dados.especificacao2);
    });
  });

  it.only('Adiciona produto ao carrinho', () => {
    cy.visit('https://www.amazon.com.br/');
    
    pesquisarProdutos(); //Se estiver vazio os parâmetros ele vai ler da lista de produtos. Se não, ele vai aplicar o que está no parâmetro

    cy.fixture('listProducts').as('listaProdutos');
    cy.get('@listaProdutos').then((dados) => {
      validarPesquisaProduto(dados.especificacao, dados.especificacao2);
    
    cy.fixture('listProducts').as('listaProdutos');
    cy.get('@listaProdutos').then((dados) => {
    adicionarQuantidade(dados.quantidade)//Se estiver vazio os parâmetros ele vai ler da lista de produtos. Se não, ele vai aplicar o que está no parâmetro

    adicionarAoCarrinho()
    })
    });
  });
});
