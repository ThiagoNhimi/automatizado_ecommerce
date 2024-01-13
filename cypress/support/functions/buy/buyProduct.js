import { COMPRAR_PRODUTOS } from "./buyProductsVariables"

const adicionarQuantidade = (quantidade) => {
      if (quantidade.length >= 1) {
        cy.get(COMPRAR_PRODUTOS.BOTAO_QUANTIDADE)
          .click();
        cy.get(COMPRAR_PRODUTOS.POPOVER_QUANTIDADE)
          .contains(quantidade) // Converte para string para fazer a verificação correta
          .click();
      } if(quantidade.length === 0) {
        cy.log('Quantidade mínima inserida por default')
      }

  };

const adicionarAoCarrinho = ()=>{
    cy.get(COMPRAR_PRODUTOS.ADICIONAR_CARRINHO)
        .click()

}
  

export {adicionarQuantidade, adicionarAoCarrinho}