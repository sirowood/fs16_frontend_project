import { Box, Button } from '@mui/material';
import { PaymentElement } from '@stripe/react-stripe-js';
import { toast } from 'react-hot-toast';

import useCart from '../../hooks/useCart';
import modalForm from '../../styles/form';

const CheckoutForm = () => {
  const { emptyCart } = useCart();

  const onSubmit = () => {
    emptyCart();
    toast.success('Order confirmed!', { duration: 5000 });
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={modalForm}
    >
      <PaymentElement />
      <Button
        fullWidth
        variant="contained"
        type="submit"
      >
        Confirm
      </Button>
    </Box>
  );
};

export default CheckoutForm;
