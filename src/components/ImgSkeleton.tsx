import { Box, Skeleton } from '@mui/material';

import { skeletonBox, imgSkeleton } from '../styles/product';

const ImgSkeleton = () => {
  return (
    <Box sx={skeletonBox}>
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={imgSkeleton}
      />
    </Box>
  );
};

export default ImgSkeleton;
