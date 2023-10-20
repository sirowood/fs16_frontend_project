import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Card,
  Skeleton,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

import ImgSkeleton from './ImgSkeleton';
import { cardContent, cardMedia, productCard } from '../styles/product';
import { ProductCardProps } from '../types/product';

const ProductCard = ({ index, product, isLoading }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    if (product) {
      navigate(`/products/${product.id}`);
    }
  }, [navigate, product]);

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      key={index}
    >
      <Card
        sx={productCard}
        elevation={8}
        onClick={handleNavigate}
      >
        {isLoading ? (
          <ImgSkeleton />
        ) : (
          <CardMedia
            component="img"
            image={product?.images[0]}
            title={product?.title}
            sx={cardMedia}
          />
        )}
        <CardContent sx={cardContent}>
          <Typography noWrap>
            {isLoading ? <Skeleton /> : product?.title}
          </Typography>

          <Typography
            noWrap
            variant="caption"
            color="text.secondary"
          >
            {isLoading ? <Skeleton /> : product?.category.name}
          </Typography>

          <Typography fontWeight="bold">
            {isLoading ? <Skeleton /> : `€ ${product?.price}`}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard;
