import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Main from '../components/Main';
import PaginationBar from '../components/products/PaginationBar';
import Category from '../components/products/Category';
import Filters from '../components/products/Filters';
import useProducts from '../hooks/useProducts';
import ProductList from '../components/ProductList';

const Products = () => {
  const params = useParams();
  const id = params.id!;
  const categoryId = +id;

  const navigate = useNavigate();
  const {
    limit,
    page,
    count,
    text,
    orderBy,
    isFetching,
    products,
    changeText,
    changeOrderBy,
    changeLimit,
    changePage,
  } = useProducts(categoryId);

  useEffect(() => {
    if (isNaN(parseInt(id))) {
      navigate('/');
    }
  }, [id, navigate]);

  return (
    <Main>
      <Category categoryId={categoryId} />
      <Filters
        text={text}
        orderBy={orderBy}
        changeText={changeText}
        changeOrderBy={changeOrderBy}
      />
      <ProductList
        isLoading={isFetching}
        products={products}
        counts={limit}
      />
      <PaginationBar
        limit={limit}
        page={page}
        count={count}
        changeLimit={changeLimit}
        changePage={changePage}
      />
    </Main>
  );
};

export default Products;
