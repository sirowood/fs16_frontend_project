import { Box, Button, IconButton, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import useCart from '../hooks/useCart';

const Cart = () => {
  const { cart, totalAmount, addItem, substractItem, removeItem, emptyCart } =
    useCart();

  if (cart.length === 0) {
    return (
      <Box
        component="main"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '24px',
          bgcolor: 'background.default',
          color: 'text.primary',
          transition: 'all .5s ease',
          flexGrow: 1,
        }}
      >
        <Typography variant="h5">No products in cart</Typography>
      </Box>
    );
  }

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '24px',
        bgcolor: 'background.default',
        color: 'text.primary',
        transition: 'all .5s ease',
        flexGrow: 1,
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 'lg' }}>
        <Box>
          <Typography variant="h5">Cart</Typography>
        </Box>
        {cart.map((product) => (
          <Box
            key={product.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '4px',
              }}
            >
              <Box
                sx={{
                  width: '64px',
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  width="100%"
                />
              </Box>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}
              >
                <Typography>{product.title}</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
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
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '8px',
                    }}
                  >
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
          </Box>
        ))}
        <Box
          sx={{
            borderTopWidth: '2px',
            borderColor: 'text.secondary',
            borderTopStyle: 'solid',
            paddingTop: '8px',
          }}
        >
          <Typography sx={{ textAlign: 'end' }}>
            {cart.length} product{cart.length > 1 ? 's' : ''}, in total €{' '}
            {totalAmount}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
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
    </Box>
  );
};

export default Cart;
