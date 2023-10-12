import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Badge, Box, Button, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useGetSingleProductQuery } from '../redux/services/productApi';
import Loading from '../components/Loading';
import Error from '../components/Error';
import useCart from '../hooks/useCart';
import Main from '../components/Main';

const Product = () => {
  const params = useParams();
  const navigate = useNavigate();
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
    <Main>
      <Box>
        <Button onClick={() => navigate('/')}>Return</Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          gap: '24px',
          margin: 'auto',
        }}
      >
        <Box>
          <Box
            component="img"
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
            gap: '16px',
          }}
        >
          <Box>
            <Typography variant="h4">{data.title}</Typography>
            <Typography>{data.description}</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
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
          </Box>
        </Box>
      </Box>
    </Main>
  );
};

export default Product;
