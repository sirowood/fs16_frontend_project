import { useCallback } from 'react';
import { Badge, Box, Button, Typography, Grid, Skeleton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import useCart from '../../hooks/useCart';
import { ProductInfoProps } from '../../types/product';
import { descriptionBox, info, titleBox } from '../../styles/product';

const ProductInfo = ({ product, isLoading }: ProductInfoProps) => {
  const { cart, addItem } = useCart();

  const getBadgeContent = useCallback(
    (id: number) => {
      return cart.find((item) => item.id === id)?.quantity || 0;
    },
    [cart]
  );

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
          <Badge
            badgeContent={getBadgeContent(product.id)}
            color="info"
          >
            <Button
              variant="contained"
              sx={{ borderRadius: '16px' }}
              startIcon={<AddShoppingCartIcon />}
              onClick={() =>
                addItem({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.images[0],
                })
              }
            >
              Add to Cart
            </Button>
          </Badge>
        </Box>
      )}
    </Grid>
  );
};

export default ProductInfo;
