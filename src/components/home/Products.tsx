import { CSSProperties } from 'react';

import { useAppSelector } from '../../redux/store';
import ProductCard from './ProductCard';
import { ProductRes } from '../../types/product';

type ProductsProps = {
  productsToShow: ProductRes[];
};

const style: CSSProperties = {
  backgroundColor: 'green',
  padding: '24px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

const Products = ({ productsToShow }: ProductsProps) => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div style={style}>
      {productsToShow.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          badgeContent={
            cart.find((item) => item.productId === product.id)?.quantity || 0
          }
        />
      ))}
    </div>
  );
};

export default Products;
