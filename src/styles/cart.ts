const emptyCartBox = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const cartBox = {
  width: '100%',
  maxWidth: 'lg',
  marginX: 'auto',
};

const cartItemsBox = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  padding: '12px 0px',
}

const cartItemBox = {
  display: 'flex',
  gap: '4px',
};

const itemInfoBox = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
};

const itemButtonsBox = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
};

const buttonsGroup = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

const priceBox = {
  display: 'flex',
  alignItems: 'baseline',
  gap: '8px',
};

const cartInfoBox = {
  borderTopWidth: '2px',
  borderColor: 'text.secondary',
  borderTopStyle: 'solid',
  paddingTop: '8px',
};

const cartButtonsBox = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export {
  emptyCartBox,
  cartBox,
  cartItemsBox,
  cartItemBox,
  itemInfoBox,
  itemButtonsBox,
  buttonsGroup,
  priceBox,
  cartInfoBox,
  cartButtonsBox,
};
