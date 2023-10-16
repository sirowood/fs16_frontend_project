const productCard = {
  borderRadius: '8px',
  overflow: 'hidden',
  transition: 'all .5s ease',
  ':hover': {
    cursor: 'pointer',
    transform: 'scale(1.02)',
  },
};

const cardMedia = {
  aspectRatio: 1,
};

const cardContent = {
  padding: '8px',
  flexGrow: 1,
};

export {
  productCard,
  cardMedia,
  cardContent,
}