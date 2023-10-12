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
  transition: 'all .5s ease',
};

const headerButtonsBox = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const unAuthedPanelBox = {
  display: 'flex',
  gap: '16px',
};

export {
  headerBox,
  headerButtonsBox,
  unAuthedPanelBox,
};
