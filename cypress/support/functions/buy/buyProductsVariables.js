const COMPRAR_PRODUTOS = {
  BOTAO_QUANTIDADE: '#a-autoid-0-announce',
  POPOVER_QUANTIDADE: '.a-popover-wrapper > .a-popover-inner',
  ADICIONAR_CARRINHO: '#add-to-cart-button',
  COMPRAR_AGORA: '#add-to-cart-button',
  CHECKBOX_FRETEGRATIS_PRIME: '#bbop-check-box',
  PEDIDO_PARA_PRESENTE: '#gift-wrap',
  VINCULAR_DISPOSITIVO: '#account-linking',
  PRODUTOS_RECOMENDADOS: '#a-popover-5 > .a-popover-wrapper',
  NEGAR_RECOMENDACAO: '.a-button-close > .a-icon',
  IR_PARA_CARRINHO: '#sw-gtc > .a-button-inner > .a-button-text',
  MODAL_CARRINHO: '#sc-active-cart > .a-cardui-body',
  BOTAO_FECHAR_PEDIDO:
    '#sc-buy-box-ptc-button > .a-button-inner > .a-button-input',
};

const DADOS_FECHAR_PEDIDO = {
  ALTERAR: '.a-span2 > .a-declarative > [data-testid]',
  EDITAR_ENDERECO:
    '.address-edit-link > [data-action="trigger-modal-dialog"] > [data-testid]',
  NOME: '#address-ui-widgets-enterAddressFullName',
  TELEFONE: '#address-ui-widgets-enterAddressPhoneNumber',
  CEP: '#address-ui-widgets-enterAddressPostalCode',
  NUMERO_RESIDENCIA: '#address-ui-widgets-buildingNumber',
  USAR_ENDERECO:
    '#address-ui-widgets-form-submit-button > .a-button-inner > .a-button-input',
  ENVIAR_PARA_ENDERECO: '[data-testid="Address_selectShipToThisAddress"]',
  MODAL_PAGAMENTO: '.pay-desktop',
  OPCOES_PAGAMENTO:
    '[id^="pp-"] > .a-box > .a-box-inner > .a-fixed-left-grid > .a-fixed-left-grid-inner > [style="width:30px;margin-left:-30px;float:left;"] > .pmts-instrument-selector > .a-radio > label',
  USAR_FORMA_PAGAMENTO:
    '.a-box-title > .a-box-inner > [id^="pp-"]  > .a-button-inner > .a-button-input',
};

export { COMPRAR_PRODUTOS, DADOS_FECHAR_PEDIDO };
