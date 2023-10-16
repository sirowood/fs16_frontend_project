import { Box, Grid, Typography } from '@mui/material';

import Main from '../components/Main';
import CartItems from '../components/cart/CartItems';
import Summary from '../components/cart/Summary';
import { cartBox } from '../styles/cart';

const Cart = () => {
  return (
    <Main>
      <Box sx={cartBox}>
        <Typography
          variant="h4"
          color="text.primary"
        >
          Shopping Cart
        </Typography>
        <Grid
          container
          columnSpacing={12}
        >
          <CartItems />
          <Summary />
        </Grid>
      </Box>
    </Main>
  );
};

export default Cart;
