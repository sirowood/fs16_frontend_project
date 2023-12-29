import ProductList from '../ProductList';
import { useGetProductsQuery } from '../../redux/services/productApi';

const FeaturedProducts = () => {
  const { data: suggestedProducts, isLoading } = useGetProductsQuery({
    offset: 0,
    limit: 4,
  });

  return (
    <ProductList
      title="Featured Products"
      isLoading={isLoading}
      products={suggestedProducts?.items}
    />
  );
};

export default FeaturedProducts;
