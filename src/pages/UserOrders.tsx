import { useNavigate } from 'react-router-dom';
import { Box, Grid, Paper, Typography } from '@mui/material';

import Main from '../components/Main';
import { useGetUserOrdersQuery } from '../redux/services/orderApi';
import { useAppSelector } from '../redux/store';
import { useEffect } from 'react';

const UserOrders = () => {
  const navigate = useNavigate();
  const userId = useAppSelector((state) => state.auth.user?.id);
  const { data } = useGetUserOrdersQuery(userId!, { skip: !userId });

  useEffect(() => {
    if (!userId) {
      navigate('/');
    } else {
    }
  }, [navigate, userId]);

  return (
    <Main>
      <Box>
        <Typography
          variant="h4"
          color="text.primary"
        >
          Orders
        </Typography>
        {data?.length === 0 && (
          <Typography color="text.secondary">No orders</Typography>
        )}
        <Grid
          container
          spacing={2}
        >
          {data?.map((order) => (
            <Grid
              item
              key={order.id}
              xs={12}
              sm={12}
              md={6}
              lg={4}
              onClick={() => navigate(`/orders/${order.id}`)}
            >
              <Paper
                elevation={3}
                style={{
                  padding: '16px',
                  marginBottom: '16px',
                  cursor: 'pointer',
                }}
              >
                <Typography>
                  Date: {new Date(order.createdAt).toLocaleString()}
                </Typography>
                <Typography>Status: {order.status}</Typography>
                <Typography>{order.orderDetails.length} Items</Typography>
                <Typography>
                  Total: €{' '}
                  {order.orderDetails
                    .reduce(
                      (total, next) =>
                        total + next.priceAtPurchase * next.quantity,
                      0
                    )
                    .toFixed(2)}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Main>
  );
};

export default UserOrders;
