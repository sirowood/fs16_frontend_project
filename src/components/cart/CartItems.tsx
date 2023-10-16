import { Typography, Grid, List, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

import useCart from '../../hooks/useCart';
import SingleItem from './SingleItem';

const CartItems = () => {
  const { cart, emptyCart } = useCart();

  return (
    <Grid
      item
      xs={12}
      md={7}
    >
      {cart.length === 0 && (
        <Typography color="text.secondary">No items added to cart.</Typography>
      )}
      <List>
        {cart.map((product) => (
          <SingleItem
            product={product}
            key={product.id}
          />
        ))}
      </List>
      {cart.length > 0 && (
        <Button
          color="error"
          size="small"
          startIcon={<ClearIcon />}
          onClick={emptyCart}
        >
          Empty cart
        </Button>
      )}
    </Grid>
  );
};

export default CartItems;
