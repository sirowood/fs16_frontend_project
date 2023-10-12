const productsControlBox = {
  display: 'flex',
  justifyContent: { sm: 'flex-end' },
  flexWrap: 'wrap',
  gap: '8px',
};

const searchInput = {
  width: {
    xs: '100%',
    sm: '160px',
  },
};

const selectorsBox = {
  display: 'flex',
  width: {
    xs: '100%',
    sm: 'max-content',
  },
  justifyContent: {
    xs: 'space-between',
    sm: 'flex-start',
  },
  gap: '8px',
};

const pageSizeSelect = {
  width: {
    xs: '120px',
    sm: '80px',
  },
};

const orderBySelect = {
  minWidth: 120,
};

const productsBox = {
  padding: '24px',
  display: 'grid',
  gridTemplateColumns: {
    sm: 'repeat(auto-fill, minmax(160px, 1fr))',
    lg: 'repeat(auto-fill, minmax(256px, 1fr))',
  },
  gap: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
  },
};

const paginationControlBox = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '8px',
};

export {
  productsControlBox,
  searchInput,
  selectorsBox,
  pageSizeSelect,
  orderBySelect,
  productsBox,
  paginationControlBox,
};