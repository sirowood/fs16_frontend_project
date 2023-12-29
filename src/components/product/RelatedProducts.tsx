import ProductList from '../ProductList';
import { useGetProductsQuery } from '../../redux/services/productApi';

const RelatedProducts = ({ categoryId }: { categoryId?: string }) => {
  const { data: suggestedProducts, isFetching } = useGetProductsQuery(
    { categoryId: categoryId, offset: 0, limit: 4 },
    { skip: !categoryId }
  );

  return (
    <ProductList
      title="Related Products"
      isLoading={!categoryId || isFetching}
      products={suggestedProducts?.items}
    />
  );
};

export default RelatedProducts;
