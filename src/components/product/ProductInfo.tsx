import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { Box, Button, Typography, Grid, Skeleton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import useCart from '../../hooks/useCart';
import {
  addButton,
  descriptionBox,
  info,
  titleBox,
} from '../../styles/product';
import { ProductInfoProps } from '../../types/product';

const ProductInfo = ({ product, isLoading }: ProductInfoProps) => {
  const { addItem } = useCart();

  const onClick = useCallback(() => {
    if (product) {
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
      });
      toast.success('Added to cart');
    }
  }, [addItem, product]);

  return (
    <Grid
      item
      sx={info}
      md={6}
    >
      <Box>
        <Box sx={titleBox}>
          <Typography
            variant="h4"
            fontWeight="bold"
          >
            {isLoading ? <Skeleton /> : product?.title}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
          >
            {isLoading ? <Skeleton /> : product?.category.name}
          </Typography>
          <Typography
            variant="h6"
            fontWeight="bold"
          >
            {isLoading ? <Skeleton /> : `€ ${product?.price}`}
          </Typography>
        </Box>
        <Box sx={descriptionBox}>
          <Typography>
            {isLoading ? <Skeleton /> : product?.description}
          </Typography>
        </Box>
      </Box>
      {product && (
        <Box>
          <Button
            variant="contained"
            sx={addButton}
            startIcon={<AddShoppingCartIcon />}
            onClick={onClick}
          >
            Add to Cart
          </Button>
        </Box>
      )}
    </Grid>
  );
};

export default ProductInfo;
