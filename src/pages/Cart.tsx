import { Box, Typography } from '@mui/material';

import Main from '../components/Main';
import CartItems from '../components/cart/CartItems';
import CartInfo from '../components/cart/CartInfo';
import useCart from '../hooks/useCart';
import { cartBox } from '../styles/cart';
import EmptyCart from '../components/cart/EmptyCart';

const Cart = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <Main>
      <Box sx={cartBox}>
        <Box>
          <Typography variant="h5">Cart</Typography>
        </Box>
        <CartItems />
        <CartInfo />
      </Box>
    </Main>
  );
};

export default Cart;
