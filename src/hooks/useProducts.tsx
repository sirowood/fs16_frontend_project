import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

import useDebounce from './useDebounce';
import { useGetProductsQuery } from '../redux/services/productApi';

const useProducts = (categoryId: string) => {
  const { debouncedText, text, setText } = useDebounce(500);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState('Default');
  const { data, isFetching } = useGetProductsQuery(
    {
      categoryId,
      limit,
      offset,
      title: debouncedText,
      orderBy: orderBy.split(' ')[0],
      direction: orderBy.split(' ')[1],
    },
    { skip: !categoryId }
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

  useEffect(() => {
    setOffset(0);
    setPage(1);
  }, [debouncedText, orderBy, categoryId]);

  return {
    limit,
    page,
    text,
    count: data?.pages,
    orderBy,
    isFetching,
    products: data?.items,
    changeText,
    changeOrderBy,
    changeLimit,
    changePage,
  };
};

export default useProducts;
