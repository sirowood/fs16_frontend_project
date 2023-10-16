const categoryBox = {
  borderRadius: '8px',
  overflow: 'hidden',
  position: 'relative',
  maxWidth: 'md',
  marginX: 'auto',
  aspectRatio: 2.4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const categoryTitleBox = {
  position: 'absolute',
  backdropFilter: 'brightness(30%) blur(4px)',
  padding: {
    xs: '8px 16px',
    sm: '16px 32px',
  },
  borderRadius: '8px',
  overflow: 'hidden',
};

const categoryTitle = {
  fontSize: {
    xs: '20px',
    sm: '24px',
    md: '40px',
  },
};

const filterBox = {
  marginTop: {
    xs: '12px',
    sm: '24px',
  },
  display: 'flex',
  flexDirection: {
    xs: 'column',
    sm: 'row',
  },
  rowGap: '8px',
  columnGap: '16px',
};

const paginationBarBox = {
  marginTop: {
    xs: '12px',
    sm: '24px',
  },
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  alignItems: 'center',
  justifyContent: 'flex-end',
  rowGap: '12px',
};

const pageSizeSelect = {
  display: {
    xs: 'none',
    sm: 'block',
  },
  width: 'min-content',
};

export {
  categoryBox,
  categoryTitleBox,
  categoryTitle,
  filterBox,
  paginationBarBox,
  pageSizeSelect,
};
