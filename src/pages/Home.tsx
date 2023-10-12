import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import Categories from '../components/home/Categories';

import useDebounce from '../hooks/useDebounce';
import ProductsControl from '../components/home/ProductsControl';
import PaginationControl from '../components/home/PaginationControl';
import Products from '../components/home/Products';
import useProductsToShow from '../hooks/useProductsToShow';

const Home = () => {
  const [categoryId, setCategoryId] = useState(0);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(12);
  const [searchTitle, setSearchTitle] = useState('');
  const [orderBy, setOrderBy] = useState('Default');

  const title = useDebounce(searchTitle, 500);

  const productsToShow = useProductsToShow({
    categoryId,
    title,
    orderBy,
  });

  const nextButtonDisabled = page * pageSize + pageSize > productsToShow.length;

  useEffect(() => {
    setPage(0);
  }, [title, categoryId, pageSize]);

  useEffect(() => {
    setSearchTitle('');
    setOrderBy('Default');
  }, [categoryId]);

  return (
    <Box
      component="main"
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        transition: 'all .5s ease',
        padding: '12px 24px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Categories setCategoryId={setCategoryId} />
      <section>
        <ProductsControl
          searchTitle={searchTitle}
          pageSize={pageSize}
          orderBy={orderBy}
          setSearchTitle={setSearchTitle}
          setPageSize={setPageSize}
          setOrderBy={setOrderBy}
        />
        <Products
          productsToShow={productsToShow.slice(
            page * pageSize,
            page * pageSize + pageSize
          )}
        />
        <PaginationControl
          page={page}
          setPage={setPage}
          nextButtonDisabled={nextButtonDisabled}
        />
      </section>
    </Box>
  );
};

export default Home;
