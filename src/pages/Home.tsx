import { useEffect, useState } from 'react';

import Categories from '../components/Categories';

import useDebounce from '../hooks/useDebounce';
import ProductsControl from '../components/ProductsControl';
import PaginationControl from '../components/PaginationControl';
import Products from '../components/Products';
import useProductsToShow from '../hooks/useProductsToShow';

const Home = () => {
  const [categoryId, setCategoryId] = useState(0);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
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
    <main>
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
    </main>
  );
};

export default Home;
