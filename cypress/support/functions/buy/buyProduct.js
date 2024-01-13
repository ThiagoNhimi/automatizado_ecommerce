import { COMPRAR_PRODUTOS, DADOS_FECHAR_PEDIDO } from './buyProductsVariables';

const adicionarQuantidade = (quantidade) => {
  if (quantidade.length >= 1) {
    cy.get(COMPRAR_PRODUTOS.BOTAO_QUANTIDADE).click();
    cy.get(COMPRAR_PRODUTOS.POPOVER_QUANTIDADE)
      .contains(quantidade) // Converte para string para fazer a verificação correta
      .click();
  }
  if (quantidade.length === 0) {
    cy.log('Quantidade mínima inserida por default');
  }
};

const adicionarAoCarrinho = () => {
  cy.get(COMPRAR_PRODUTOS.ADICIONAR_CARRINHO).click();
  cy.wait(4000);

  cy.document().then((doc) => {
    const elementosRecomendados = doc.querySelectorAll(
      COMPRAR_PRODUTOS.PRODUTOS_RECOMENDADOS
    );

    if (elementosRecomendados.length > 0) {
      const $elemento = Cypress.$(elementosRecomendados); // Converta para jQuery para usar as funções do Cypress

      if ($elemento.length > 0 && $elemento.is(':visible')) {
        // Se o elemento for visível, faça uma ação
        cy.get(COMPRAR_PRODUTOS.NEGAR_RECOMENDACAO).click();
      } else {
        // Elemento não é visível
        cy.log('O botão "Agora Não" não está visível.');
      }
    } else {
      // Elemento não está presente no DOM
      cy.log('O botão "Agora Não" não foi encontrado no DOM.');
    }
  });
};

const fecharPedido = () => {
  cy.get(COMPRAR_PRODUTOS.BOTAO_FECHAR_PEDIDO).click();
  cy.login();

  cy.document().then((doc) => {
    const elementosOpcoesPagamento = doc.querySelectorAll(
      DADOS_FECHAR_PEDIDO.OPCOES_PAGAMENTO
    );
    const bannerTela = doc.querySelectorAll('.maple-banner__container');

    if (elementosOpcoesPagamento.length > 0 || bannerTela.length > 0) {
      // Elemento Opções de Pagamento está presente no DOM
      cy.get(DADOS_FECHAR_PEDIDO.OPCOES_PAGAMENTO).eq(0).click({ force: true });
      cy.get(DADOS_FECHAR_PEDIDO.OPCOES_PAGAMENTO).eq(1).click({ force: true });
    } else {
      // Elemento Enviar para Endereço está presente no DOM
      cy.get(DADOS_FECHAR_PEDIDO.ENVIAR_PARA_ENDERECO).click();
      cy.get(DADOS_FECHAR_PEDIDO.OPCOES_PAGAMENTO).eq(0).click({ force: true });
      cy.get(DADOS_FECHAR_PEDIDO.OPCOES_PAGAMENTO).eq(1).click({ force: true });
    }

    cy.get(DADOS_FECHAR_PEDIDO.USAR_FORMA_PAGAMENTO).click();
  });

  /*  cy.document().then((doc) => {
      const elementosRecomendados = doc.querySelectorAll(
        DADOS_FECHAR_PEDIDO.EDITAR_ENDERECO
      );

      if (elementosRecomendados.length > 0) {
        const $elemento = Cypress.$(elementosRecomendados); // Converta para jQuery para usar as funções do Cypress

        if ($elemento.length > 0 && $elemento.is(':visible')) {
          // Se o elemento for visível, faça uma ação
          cy.get(DADOS_FECHAR_PEDIDO.ALTERAR).click();
          cy.get(DADOS_FECHAR_PEDIDO.EDITAR_ENDERECO).click();
        } else {
          // Elemento não é visível
          cy.log('O botão "Agora Não" não está visível.');
        }
      } else {
        // Elemento não está presente no DOM
        cy.log('O botão "Agora Não" não foi encontrado no DOM.');
      }
    });

    if (nome) {
      cy.get(DADOS_FECHAR_PEDIDO.NOME).clear().type(nome);
    }
    cy.get(DADOS_FECHAR_PEDIDO.TELEFONE).type(telefone);
    cy.get(DADOS_FECHAR_PEDIDO.CEP).type(cep).wait(4000);
    cy.get('.a-modal-scroller').click();
    cy.get(DADOS_FECHAR_PEDIDO.NUMERO_RESIDENCIA).type(numero);
    cy.get(DADOS_FECHAR_PEDIDO.USAR_ENDERECO).click();
    */
};

export { adicionarQuantidade, adicionarAoCarrinho, fecharPedido };
