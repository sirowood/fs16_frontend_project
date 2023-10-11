import { useGetProductsQuery } from '../redux/services/productApi';
import { ProductRes } from '../types/product';

type useProductsToShowProps = {
  categoryId: number;
  title: string;
  orderBy: string;
};

const useProductsToShow = ({
  categoryId,
  title,
  orderBy,
}: useProductsToShowProps) => {
  const { data: products } = useGetProductsQuery({});
  let result: ProductRes[] = products ?? [];

  if (categoryId !== 0) {
    result = result.filter((product) => product.category.id === categoryId);
  }

  result = result.filter((product) =>
    product.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
  );

  switch (orderBy) {
    case 'Cheapest first':
      result.sort((prev, next) => prev.price - next.price);
      break;
    case 'Expensive first':
      result.sort((prev, next) => next.price - prev.price);
      break;
    case 'Title A-Z':
      result.sort((prev, next) => {
        const titlePrev = prev.title.toLowerCase();
        const titleNext = next.title.toLowerCase();
        return titlePrev.localeCompare(titleNext);
      });
      break;
    case 'Title Z-A':
      result.sort((prev, next) => {
        const titlePrev = prev.title.toLowerCase();
        const titleNext = next.title.toLowerCase();
        return titleNext.localeCompare(titlePrev);
      });
      break;
    default:
      break;
  }

  return result;
};

export default useProductsToShow;
