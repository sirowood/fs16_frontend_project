import { Box, Grid, Skeleton } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';

import { gallery, imgSkeleton, skeletonBox } from '../../styles/product';
import { ProductGalleryProps } from '../../types/product';

const ProductGallery = ({ title, images, isLoading }: ProductGalleryProps) => {
  return (
    <Grid
      justifyContent="center"
      item
      md={6}
      sx={gallery}
    >
      {isLoading ? (
        <Box sx={skeletonBox}>
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={imgSkeleton}
          />
        </Box>
      ) : (
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
        >
          {images?.map((src) => (
            <img
              key={src}
              src={src}
              alt={title}
              style={{ borderRadius: '8px' }}
            />
          ))}
        </Carousel>
      )}
    </Grid>
  );
};

export default ProductGallery;
