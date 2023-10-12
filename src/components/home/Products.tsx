import { useCallback } from 'react';
import { Box } from '@mui/material';

import ProductCard from './ProductCard';
import useCart from '../../hooks/useCart';
import { ProductRes } from '../../types/product';
import { productsBox } from '../../styles/home';

const Products = ({ productsToShow }: { productsToShow: ProductRes[] }) => {
  const { cart } = useCart();

  const getBadgeContent = useCallback(
    (id: number) => {
      return cart.find((item) => item.id === id)?.quantity || 0;
    },
    [cart]
  );

  return (
    <Box sx={productsBox}>
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
