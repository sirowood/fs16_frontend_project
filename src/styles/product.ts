const productBox = {
  display: 'flex',
  flexDirection: {
    xs: 'column',
    md: 'row',
  },
  gap: '24px',
  margin: 'auto',
};

const productImgBox = {
  maxWidth: {
    xs: '100%',
    md: '512px',
  },
}

const productInfoBox = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '16px',
};

const productAddButtonBox = {
  display: 'flex',
  justifyContent: 'flex-end',
};

export {
  productBox,
  productImgBox,
  productInfoBox,
  productAddButtonBox,
};
