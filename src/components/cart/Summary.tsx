import { useCallback, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { Box, Grid, Typography } from '@mui/material';

import useCart from '../../hooks/useCart';
import checkout from '../../libs/stripe';
import { checkoutButton, summaryDetailsBox } from '../../styles/cart';

const Summary = () => {
  const { cart, totalAmount } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = useCallback(async () => {
    setIsLoading(true);
    const sessionUrl = await checkout(cart);
    if (sessionUrl) {
      window.location.replace(sessionUrl);
      setIsLoading(false);
    }
  }, [cart]);

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
      <Box sx={summaryDetailsBox}>
        <Typography>Order total</Typography>
        <Typography fontWeight="bold">€ {totalAmount}</Typography>
      </Box>
      <LoadingButton
        loading={isLoading}
        variant="contained"
        fullWidth
        sx={checkoutButton}
        disabled={!cart.length}
        onClick={handleCheckout}
      >
        Checkout
      </LoadingButton>
    </Grid>
  );
};

export default Summary;
