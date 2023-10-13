import { Box, Button } from '@mui/material';
import { PaymentElement } from '@stripe/react-stripe-js';
import { toast } from 'react-hot-toast';

import useCart from '../../hooks/useCart';

const CheckoutForm = () => {
  const { emptyCart } = useCart();

  const handleSubmit = () => {
    emptyCart();
    toast.success('Order confirmed!', { duration: 5000 });
  };

  return (
    <Box component="form">
      <PaymentElement />
      <Button onClick={handleSubmit}>Confirm</Button>
    </Box>
  );
};

export default CheckoutForm;
