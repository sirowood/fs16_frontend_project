const headerBox = {
  position: 'sticky',
  padding: '12px 24px',
  top: '0px',
  zIndex: '100',
  bgcolor: 'background.default',
  color: 'text.primary',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '56px',
  transition: 'all 0.3s ease',
  boxShadow: '0px 0px 16px 4px gray',
};

const headerNav = {
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
};

const headerTitle = {
  color: 'text.primary',
  fontWeight: 'bold',
};

const desktopNavBox = {
  display: {
    xs: 'none',
    md: 'flex',
  },
  gap: '8px',
};

const mobileNavBox = {
  display: {
    xs: 'block',
    md: 'none',
  },
};

const mobileNavButton = {
  color: 'text.primary',
  padding: '2px 8px',
};

const desktopNavLinkText = {
  transition: 'all 0.3s ease',
  ':hover': {
    color: 'text.primary',
  },
};

const navActions = {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
};

const shoppingBag = {
  backgroundColor: 'text.primary',
  borderRadius: '16px',
  ':hover': {
    backgroundColor: 'text.primary',
  },
};

export {
  headerBox,
  headerNav,
  headerTitle,
  desktopNavBox,
  mobileNavBox,
  mobileNavButton,
  desktopNavLinkText,
  navActions,
  shoppingBag,
};
