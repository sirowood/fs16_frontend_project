const cartBox = {
  width: '100%',
  maxWidth: 'lg',
  marginX: 'auto',
};

const itemBox = {
  padding: '16px 0px',
  borderBottomStyle: 'solid',
  borderBottomWidth: '1px',
  borderBottomColor: 'text.secondary',
};

const imgBox = {
  width: {
    xs: '96px',
    md: '128px',
  },
  aspectRatio: 1,
  borderRadius: '6px',
  overflow: 'hidden',
  flexShrink: 0,
};

const infoBox = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexGrow: 1,
  height: '96px',
  marginLeft: '8px',
};

const buttonsBox = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const iconButton = {
  padding: '0px',
};

const totalPriceBox = {
  display: 'flex',
  gap: '8px',
  justifyContent: 'space-between',
};

const summaryDetailsBox = {
  borderTopColor: 'lightgray',
  borderTopWidth: '2px',
  borderTopStyle: 'solid',
  padding: '16px 0px',
  display: 'flex',
  justifyContent: 'space-between',
};

const checkoutButton = { borderRadius: '20px' };

export {
  cartBox,
  itemBox,
  imgBox,
  infoBox,
  buttonsBox,
  iconButton,
  totalPriceBox,
  summaryDetailsBox,
  checkoutButton,
};
