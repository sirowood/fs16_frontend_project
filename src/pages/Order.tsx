import { Box, Grid, Typography } from '@mui/material';

import Main from '../components/Main';
import { cartBox } from '../styles/cart';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetSingleOrderQuery } from '../redux/services/orderApi';
import OrderItems from '../components/order/OrderItems';
import Summary from '../components/order/Summary';
import { useEffect } from 'react';

const Order = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data: order, isError } = useGetSingleOrderQuery(params?.id!);

  useEffect(() => {
    if (isError) {
      navigate('/');
    }
  }, [isError, navigate]);

  return (
    <Main>
      <Box sx={cartBox}>
        <Typography
          variant="h4"
          color="text.primary"
        >
          Order Items
        </Typography>
        <Grid
          container
          columnSpacing={12}
        >
          <OrderItems orderDetails={order?.orderDetails} />
          <Summary order={order} />
        </Grid>
      </Box>
    </Main>
  );
};

export default Order;
