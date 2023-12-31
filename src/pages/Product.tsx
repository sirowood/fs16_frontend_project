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
    isFetching,
    isError,
  } = useGetSingleProductQuery(params?.id!);

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
          isLoading={isFetching}
          title={product?.title}
          images={product?.images.map((image) => image.url)}
        />
        <ProductInfo
          product={product}
          isLoading={isFetching}
        />
      </Grid>
      <RelatedProducts categoryId={product?.category.id} />
    </Main>
  );
};

export default Product;
