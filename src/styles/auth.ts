const authFormBox = {
  position: 'relative',
  maxWidth: 'sm',
  marginX: 'auto',
  padding: '60px',
  backgroundColor: 'action.hover',
  borderRadius: '8px',
  marginTop: '120px',
};

const authIcon = {
  position: 'absolute',
  top: '0',
  left: '50%',
  transform: 'translateX(-50%) translateY(-70%)',
  fontSize: '160px',
  filter: 'drop-shadow(0px 4px 8px gray)',
};

const registerText = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '16px',
  color: 'text.secondary',
  transition: 'all 0.3s ease',
  ':hover': {
    cursor: 'pointer',
    color: 'text.primary',
  },
};

export {
  authFormBox,
  authIcon,
  registerText,
};
