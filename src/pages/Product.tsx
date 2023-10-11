import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Badge, Box, Button, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useGetSingleProductQuery } from '../redux/services/productApi';
import Loading from '../components/Loading';
import Error from '../components/Error';
import useCart from '../hooks/useCart';

// TODO
const Product = () => {
  const params = useParams();
  const { data, isLoading, isError } = useGetSingleProductQuery(+params?.id!);
  const { cart, addItem } = useCart();

  const getBadgeContent = useCallback(
    (id: number) => {
      return cart.find((item) => item.id === id)?.quantity || 0;
    },
    [cart]
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  if (!data) {
    return null;
  }

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        gap: '24px',
        bgcolor: 'background.default',
        color: 'text.primary',
        transition: 'all .5s ease',
      }}
    >
      <Box
        sx={{
          width: '512px',
          height: '512px',
          flexShrink: '0',
        }}
      >
        <img
          src={data.images[0]}
          alt={data.title}
          width="100%"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Typography variant="h4">{data.title}</Typography>
          <Typography>{data.description}</Typography>
        </div>
        <div>
          <Badge
            badgeContent={getBadgeContent(data.id)}
            color="info"
          >
            <Button
              variant="contained"
              startIcon={<AddShoppingCartIcon />}
              onClick={() =>
                addItem({
                  id: data.id,
                  title: data.title,
                  price: data.price,
                  image: data.images[0],
                })
              }
            >
              Add to Cart
            </Button>
          </Badge>
        </div>
      </Box>
    </Box>
  );
};

export default Product;
