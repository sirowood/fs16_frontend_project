import { Box, Typography, IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

import useCart from '../../hooks/useCart';
import {
  cartItemBox,
  itemInfoBox,
  itemButtonsBox,
  buttonsGroup,
  priceBox,
  cartItemsBox,
} from '../../styles/cart';

const CartItems = () => {
  const { cart, addItem, substractItem, removeItem } = useCart();

  return (
    <Box sx={cartItemsBox}>
      {cart.map((product) => (
        <Box
          sx={cartItemBox}
          key={product.id}
        >
          <Box
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
                  <Typography variant="caption">x € {product.price}</Typography>
                )}
                <Typography>€ {product.price * product.quantity}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CartItems;
