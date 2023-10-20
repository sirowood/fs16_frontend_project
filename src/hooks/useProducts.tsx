import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

import useDebounce from './useDebounce';
import {
  useGetPageCountQuery,
  useGetProductsQuery,
} from '../redux/services/productApi';
import { ProductRes } from '../types/product';

const useProducts = (categoryId: number) => {
  const { debouncedText, text, setText } = useDebounce(500);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState('Default');
  const { data, isLoading } = useGetProductsQuery(
    {
      categoryId,
      title: debouncedText,
    },
    { skip: isNaN(categoryId) }
  );

  const { data: count } = useGetPageCountQuery(
    { limit, categoryId, title: debouncedText },
    { skip: isNaN(categoryId) }
  );

  const sortProducts = useCallback(
    (orderBy: string, products?: ProductRes[]) => {
      const result: ProductRes[] = products ? [...products] : [];

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
    },
    []
  );

  const changeLimit = useCallback((e: SelectChangeEvent<number>) => {
    setLimit(+e.target.value);
    setOffset(0);
    setPage(1);
  }, []);

  const changePage = useCallback(
    (_: ChangeEvent<unknown>, value: number) => {
      setPage(value);
      setOffset((value - 1) * limit);
      window.scrollTo(0, 0);
    },
    [limit]
  );

  const changeText = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setText(e.target.value);
    },
    [setText]
  );

  const changeOrderBy = useCallback((e: SelectChangeEvent<string>) => {
    setOrderBy(e.target.value);
  }, []);

  const products = useMemo(() => {
    return sortProducts(orderBy, data).slice(offset, offset + limit);
  }, [sortProducts, orderBy, data, offset, limit]);

  useEffect(() => {
    setOffset(0);
    setPage(1);
  }, [debouncedText, orderBy, categoryId]);

  return {
    limit,
    page,
    text,
    count,
    orderBy,
    isLoading,
    products,
    changeText,
    changeOrderBy,
    changeLimit,
    changePage,
  };
};

export default useProducts;
