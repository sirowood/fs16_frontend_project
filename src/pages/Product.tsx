import { useParams } from 'react-router-dom';

import { useGetSingleProductQuery } from '../redux/services/productApi';
import Loading from '../components/Loading';
import Error from '../components/Error';

// TODO
const Product = () => {
  const params = useParams();
  const { data, isLoading, isError } = useGetSingleProductQuery(+params?.id!);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  if (!data) {
    return null;
  }

  return <main>{data.title}</main>;
};

export default Product;
