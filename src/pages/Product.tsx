import { useNavigate, useParams } from 'react-router-dom';
import { Grid } from '@mui/material';

import Main from '../components/Main';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import RelatedProducts from '../components/product/RelatedProducts';
import { useGetSingleProductQuery } from '../redux/services/productApi';

const Product = () => {
  const params = useParams();
  const navigate = useNavigate();
  const {
    data: product,
    isLoading,
    isError,
  } = useGetSingleProductQuery(+params?.id!);

  if (isError) {
    navigate('/');
  }

  return (
    <Main>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={6}
      >
        <ProductGallery
          isLoading={isLoading}
          title={product?.title}
          images={product?.images}
        />
        <ProductInfo
          product={product}
          isLoading={isLoading}
        />
      </Grid>
      <RelatedProducts
        categoryId={product?.category.id}
        isLoading={isLoading}
      />
    </Main>
  );
};

export default Product;
