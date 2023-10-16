import ProductList from '../ProductList';
import { useGetProductsQuery } from '../../redux/services/productApi';

type RelatedProductsProps = {
  categoryId?: number;
  isLoading: boolean;
};

const RelatedProducts = ({ categoryId, isLoading }: RelatedProductsProps) => {
  const { data: suggestedProducts } = useGetProductsQuery(
    { categoryId: categoryId, offset: 0, limit: 4 },
    { skip: !categoryId }
  );

  return (
    <ProductList
      title="Related Products"
      isLoading={isLoading}
      products={suggestedProducts}
    />
  );
};

export default RelatedProducts;
