import { LoadingButton } from '@mui/lab';
import { Box, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

import { checkoutButton, summaryDetailsBox } from '../../styles/cart';
import { OrderRes } from '../../types/order';
import {
  useCancelOrderMutation,
  useDeliveredOrderMutation,
  useDeliveryOrderMutation,
  usePayOrderMutation,
  useReturnOrderMutation,
} from '../../redux/services/orderApi';
import { useAppSelector } from '../../redux/store';

const Summary = ({ order }: { order?: OrderRes }) => {
  const userRole = useAppSelector((state) => state.auth.user?.role);
  const [payOrder, { isLoading: paying, isSuccess: paySuccess }] =
    usePayOrderMutation();
  const [cancelOrder, { isLoading: canceling, isSuccess: cancelSuccess }] =
    useCancelOrderMutation();
  const [returnOrder, { isLoading: returning, isSuccess: returnSuccess }] =
    useReturnOrderMutation();
  const [
    deliverOrder,
    { isLoading: delivering, isSuccess: deliveringSuccess },
  ] = useDeliveryOrderMutation();
  const [
    deliveredOrder,
    { isLoading: deliveredLoading, isSuccess: deliveredSuccess },
  ] = useDeliveredOrderMutation();

  useEffect(() => {
    if (cancelSuccess) {
      toast.success('Cancel order success!');
    } else if (paySuccess) {
      toast.success('Pay order success!');
    } else if (returnSuccess) {
      toast.success('Return order success!');
    } else if (deliveringSuccess) {
      toast.success('Order status has been updated to Delivering!');
    } else if (deliveredSuccess) {
      toast.success('Order delivered success!');
    }
  }, [
    cancelSuccess,
    deliveredSuccess,
    deliveringSuccess,
    paySuccess,
    returnSuccess,
  ]);

  if (!order) {
    return null;
  }

  return (
    <Grid
      item
      xs={12}
      md={5}
      marginTop="20px"
    >
      <Typography
        variant="h6"
        paddingBottom="16px"
      >
        Order summary
      </Typography>
      <Box>
        <Typography variant="h6">Status: {order.status}</Typography>
        <Typography>Order at:</Typography>
        <Typography>{new Date(order.createdAt).toLocaleString()}</Typography>
        <Typography>Update at:</Typography>
        <Typography>{new Date(order.updatedAt).toLocaleString()}</Typography>
        <Typography>Delivery to:</Typography>
        <Typography>{order.address.street}</Typography>
        <Typography>
          {order.address.postCode}, {order.address.city},{' '}
          {order.address.country}
        </Typography>
      </Box>
      <Box sx={summaryDetailsBox}>
        <Typography>Order total</Typography>
        <Typography fontWeight="bold">
          €{' '}
          {order.orderDetails
            .reduce(
              (total, next) => total + next.priceAtPurchase * next.quantity,
              0
            )
            .toFixed(2)}
        </Typography>
      </Box>
      {order.status === 'Unpaid' && (
        <LoadingButton
          loading={paying}
          variant="contained"
          fullWidth
          sx={checkoutButton}
          onClick={() => payOrder(order.id)}
        >
          Pay
        </LoadingButton>
      )}
      {(order.status === 'Unpaid' || order.status === 'Paid') &&
        userRole === 'Customer' && (
          <LoadingButton
            loading={canceling}
            variant="contained"
            color="error"
            fullWidth
            sx={checkoutButton}
            onClick={() => cancelOrder(order.id)}
          >
            Cancel
          </LoadingButton>
        )}
      {order.status === 'Delivered' && userRole === 'Customer' && (
        <LoadingButton
          loading={returning}
          variant="contained"
          fullWidth
          sx={checkoutButton}
          onClick={() => returnOrder(order.id)}
        >
          Return
        </LoadingButton>
      )}
      {order.status === 'Paid' && userRole === 'Admin' && (
        <LoadingButton
          loading={delivering}
          variant="contained"
          fullWidth
          sx={checkoutButton}
          onClick={() => deliverOrder(order.id)}
        >
          Deliver
        </LoadingButton>
      )}
      {order.status === 'Delivering' && userRole === 'Admin' && (
        <LoadingButton
          loading={deliveredLoading}
          variant="contained"
          fullWidth
          sx={checkoutButton}
          onClick={() => deliveredOrder(order.id)}
        >
          Delivered
        </LoadingButton>
      )}
    </Grid>
  );
};

export default Summary;
