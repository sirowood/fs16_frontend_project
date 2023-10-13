import { Box, Typography, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import useCart from '../../hooks/useCart';
import { cartInfoBox, cartButtonsBox } from '../../styles/cart';
import useCheckoutModal from '../../hooks/useCheckoutModal';

const CartInfo = () => {
  const { cart, totalAmount, emptyCart } = useCart();
  const { onOpen } = useCheckoutModal();

  return (
    <Box sx={cartInfoBox}>
      <Typography sx={{ textAlign: 'end' }}>
        {cart.length} product{cart.length > 1 ? 's' : ''}, in total €{' '}
        {totalAmount}
      </Typography>
      <Box sx={cartButtonsBox}>
        <Button
          color="error"
          size="small"
          startIcon={<ClearIcon />}
          onClick={emptyCart}
        >
          Empty cart
        </Button>
        <Button
          size="small"
          variant="contained"
          startIcon={<ShoppingCartCheckoutIcon />}
          onClick={onOpen}
        >
          Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default CartInfo;
