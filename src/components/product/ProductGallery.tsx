import { Carousel } from 'react-responsive-carousel';
import { Box, Grid, Skeleton } from '@mui/material';

import ImgSkeleton from '../ImgSkeleton';
import {
  gallery,
  thumbImgSkeleton,
  thumbsSkeletonBox,
} from '../../styles/product';
import { ProductGalleryProps } from '../../types/product';

const ProductGallery = ({ title, images, isLoading }: ProductGalleryProps) => {
  return (
    <Grid
      justifyContent="center"
      item
      xs={12}
      md={6}
      sx={gallery}
    >
      {isLoading ? (
        <Box>
          <ImgSkeleton />
          <Box sx={thumbsSkeletonBox}>
            {Array.from(new Array(3)).map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                animation="wave"
                sx={thumbImgSkeleton}
              />
            ))}
          </Box>
        </Box>
      ) : (
        <Box>
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
        </Box>
      )}
    </Grid>
  );
};

export default ProductGallery;
