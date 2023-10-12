import { useCallback } from 'react';

import ProductCard from './ProductCard';
import useCart from '../../hooks/useCart';
import { ProductRes } from '../../types/product';
import { Box } from '@mui/material';

type ProductsProps = {
  productsToShow: ProductRes[];
};

const Products = ({ productsToShow }: ProductsProps) => {
  const { cart } = useCart();

  const getBadgeContent = useCallback(
    (id: number) => {
      return cart.find((item) => item.id === id)?.quantity || 0;
    },
    [cart]
  );

  return (
    <Box
      sx={{
        padding: '24px',
        display: 'grid',
        gridTemplateColumns: {
          sm: 'repeat(auto-fill, minmax(160px, 1fr))',
          lg: 'repeat(auto-fill, minmax(256px, 1fr))',
        },
        gap: {
          xs: '8px',
          sm: '16px',
          md: '24px',
          lg: '32px',
        },
      }}
    >
      {productsToShow.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          badgeContent={getBadgeContent(product.id)}
        />
      ))}
    </Box>
  );
};

export default Products;
