import { LOGIN } from './global/loginVariables';
import { NAV_BAR } from './global/navMenuVariables';

// cypress/support/index.js ou cypress/support/commands.js
Cypress.on('uncaught:exception', (err, runnable) => {
  // Retorne false para impedir que o erro não tratado falhe no teste
  return false;
});

//cy.get(NAV_BAR.CONTAS_E_LISTAS).click();

Cypress.Commands.add('login', (email, senha) => {
  cy.fixture('loginDatas').then((dados) => {
    cy.get(LOGIN.CAMPO_EMAIL).type(email || dados.email);
    cy.get(LOGIN.BOTAO_CONTINUAR).click();
    cy.get(LOGIN.CAMPO_SENHA).type(senha || dados.senha);
    cy.get(LOGIN.BOTAO_FAZER_LOGIN).click();
    /*O código abaixo irá validar se irá aparecer na tela de login a opção de deixar mais segura a conta usando
        o número de celular. Caso não encontre ele segue o teste, mas se encontrar, clica em "Agora Não"*/
    cy.document().then((doc) => {
      const elementoExiste = doc.getElementById(LOGIN.AGORA_NAO) !== null;

      if (elementoExiste) {
        // Elemento está presente no DOM
        cy.get(LOGIN.AGORA_NAO, { timeout: 0, failOnStatusCode: false }).then(
          ($element) => {
            if ($element.length > 0 || $element.is(':visible')) {
              // Se o elemento for visível, faça uma ação
              cy.get(LOGIN.AGORA_NAO).click();
            }
          }
        );
      } else {
        // Elemento não está presente no DOM
        cy.log('O botão "Agora Não" não foi encontrado no DOM.');
      }
    });
  });
});
