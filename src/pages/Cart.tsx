import { Box, Button, IconButton, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import Main from '../components/Main';
import useCart from '../hooks/useCart';
import {
  buttonsGroup,
  cartBox,
  cartButtonsBox,
  cartInfoBox,
  cartItemBox,
  cartItemsBox,
  emptyCartBox,
  itemButtonsBox,
  itemInfoBox,
  priceBox,
} from '../styles/cart';

const Cart = () => {
  const { cart, totalAmount, addItem, substractItem, removeItem, emptyCart } =
    useCart();

  if (cart.length === 0) {
    return (
      <Main>
        <Box sx={emptyCartBox}>
          <Typography
            variant="h4"
            textAlign="center"
          >
            No products in cart
          </Typography>
        </Box>
      </Main>
    );
  }

  return (
    <Main>
      <Box sx={cartBox}>
        <Box>
          <Typography variant="h5">Cart</Typography>
        </Box>
        <Box sx={cartItemsBox}>
          {cart.map((product) => (
            <Box sx={cartItemBox}>
              <Box
                key={product.id}
                component="img"
                src={product.image}
                alt={product.title}
                width={'64px'}
                height={'64px'}
              />
              <Box sx={itemInfoBox}>
                <Typography>{product.title}</Typography>
                <Box sx={itemButtonsBox}>
                  <Box sx={buttonsGroup}>
                    {product.quantity === 1 ? (
                      <IconButton onClick={() => removeItem(product.id)}>
                        <DeleteIcon />
                      </IconButton>
                    ) : (
                      <IconButton onClick={() => substractItem(product.id)}>
                        <RemoveIcon />
                      </IconButton>
                    )}
                    <Typography>{product.quantity}</Typography>
                    <IconButton onClick={() => addItem(product)}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                  <Box sx={priceBox}>
                    {product.quantity > 1 && (
                      <Typography variant="caption">
                        x € {product.price}
                      </Typography>
                    )}
                    <Typography>
                      € {product.price * product.quantity}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

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
            >
              Checkout
            </Button>
          </Box>
        </Box>
      </Box>
    </Main>
  );
};

export default Cart;
