import { NAV_BAR } from '../../global/navMenuVariables';
import { PAGINA_PRODUTO } from './searchProductsVariables';

const pesquisarProdutos = (produtoDesejado) => {
  cy.fixture('listProducts').then((dados) => {
    // Verifica se produtoDesejado existe ou use dados.produto como valor padrão
    produtoDesejado = produtoDesejado || dados.produto;

    if (produtoDesejado || produtoDesejado.length >= 1) {
      cy.get(NAV_BAR.BARRA_DE_PESQUISA.CAMPOS_PESQUISA).type(produtoDesejado);
      cy.get(NAV_BAR.BARRA_DE_PESQUISA.BOTÃO_PESQUISAR).click();
    } else {
      throw new Error(
        `Teste falhou. Nenhum produto desejado. Favor revisar o código`
      );
    }
  });
};

const validarPesquisaProduto = (especificacao1, especificacao2) => {
  const PALAVRAS_CHAVE = [especificacao1, especificacao2];
  let elementoEncontrado = null;

  cy.get(PAGINA_PRODUTO.TITULO_PRODUTO).each(($title, index, $titles) => {
    const titleText = $title.text().toLowerCase(); // Converte o texto do título para minúsculas

    const areAllKeywordsPresent = PALAVRAS_CHAVE.every((PALAVRA_CHAVE) =>
      titleText.includes(PALAVRA_CHAVE.toLowerCase())
    ); // Converte a palavra-chave para minúsculas

    if (areAllKeywordsPresent && !elementoEncontrado) {
      elementoEncontrado = $title;
    }

    if (index === $titles.length - 1) {
      // Última iteração, verifica se encontrou o elemento
      if (elementoEncontrado) {
        cy.wrap(elementoEncontrado).click();
      } else {
        cy.go('back');
        throw new Error(`Teste falhou. Nenhum produto encontrado`);
      }
    }
  });
};

export { pesquisarProdutos, validarPesquisaProduto };
