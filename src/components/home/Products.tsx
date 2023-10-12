import { CSSProperties, useCallback } from 'react';

import ProductCard from './ProductCard';
import useCart from '../../hooks/useCart';
import { ProductRes } from '../../types/product';

type ProductsProps = {
  productsToShow: ProductRes[];
};

const style: CSSProperties = {
  padding: '24px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '8px',
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
    <div style={style}>
      {productsToShow.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          badgeContent={getBadgeContent(product.id)}
        />
      ))}
    </div>
  );
};

export default Products;
