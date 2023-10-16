const billboardSection = {
  display: 'flex',
  justifyContent: 'center',
};

const billboardContainer = {
  backgroundImage: 'url(/img/billboard-bg.png)',
  backgroundSize: 'cover',
  borderRadius: '12px',
  aspectRatio: {
    xs: '1',
    md: '2.4/1',
  },
  width: '100%',
  maxWidth: 'xl',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '0px 16px',
};

const billboardText = {
  fontWeight: 'bold',
  fontSize: {
    xs: '1.5em',
    sm: '2em',
    md: '3em',
    lg: '4em',
  },
};

const seeAllBox = {
  marginTop: '36px',
  display: 'flex',
  justifyContent: 'center',
};

const seeAllButton = {
  paddingX: '60px',
  borderWidth: '2px',
};

const whyUsHightlightsBox = {
  display: 'flex',
  justifyContent: 'space-between',
  paddingY: '8px',
};

export {
  billboardSection,
  billboardContainer,
  billboardText,
  seeAllBox,
  seeAllButton,
  whyUsHightlightsBox,
};