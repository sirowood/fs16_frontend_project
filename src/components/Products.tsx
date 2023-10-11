import { useNavigate } from 'react-router-dom';
import { ProductRes } from '../types/product';

type ProductsProps = {
  productsToShow: ProductRes[];
};

const Products = ({ productsToShow }: ProductsProps) => {
  const navigate = useNavigate();

  return (
    <div>
      {productsToShow.map((product) => (
        <div
          key={product.id}
          onClick={() => navigate(`/products/${product.id}`)}
        >
          {product.title} {product.price}
        </div>
      ))}
    </div>
  );
};

export default Products;
