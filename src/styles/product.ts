const gallery = {
  overflow: 'hidden',
  '& .thumbs-wrapper': {
    margin: '0px',
    display: 'flex',
    justifyContent: 'center',

    '& .thumbs': {
      paddingInlineStart: 'unset',
    },
  },
};

const thumbsSkeletonBox = {
  marginY: '16px',
  display: 'flex',
  justifyContent: 'center',
  gap: '16px',
  paddingY: '5px'
};

const thumbImgSkeleton = {
  borderRadius: '8px',
  width: '70px',
  height: '70px',
};

const info = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

const titleBox = {
  borderBottom: '2px solid #F0F0F0',
  paddingBottom: '8px',
};

const descriptionBox = {
  borderBottom: '2px solid #F0F0F0',
  paddingY: '16px',
};

const skeletonBox = {
  width: '100%',
  borderRadius: '8px',
  paddingTop: '100%',
  position: 'relative',
  overflow: 'hidden',
};

const imgSkeleton = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

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

const addButton = {
  borderRadius: '16px',
  width: { xs: '100%', sm: 'fit-content' },
};

export {
  gallery,
  thumbsSkeletonBox,
  thumbImgSkeleton,
  info,
  titleBox,
  descriptionBox,
  skeletonBox,
  imgSkeleton,
  productCard,
  cardMedia,
  cardContent,
  addButton,
};
