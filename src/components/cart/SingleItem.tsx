import { useCallback } from 'react';
import { ListItem, Box, Typography, IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

import useCart from '../../hooks/useCart';
import {
  itemBox,
  imgBox,
  infoBox,
  buttonsBox,
  iconButton,
  totalPriceBox,
} from '../../styles/cart';
import { CartItem } from '../../types/cart';

const SingleItem = ({ product }: { product: CartItem }) => {
  const { addItem, substractItem, removeItem } = useCart();

  const onAdd = useCallback(() => {
    addItem(product);
  }, [addItem, product]);

  const onSubstract = useCallback(() => {
    substractItem(product.id);
  }, [product.id, substractItem]);

  const onRemove = useCallback(() => {
    removeItem(product.id);
  }, [product.id, removeItem]);

  return (
    <ListItem sx={itemBox}>
      <Box sx={imgBox}>
        <img
          src={product.image}
          alt={product.title}
          width="100%"
        />
      </Box>
      <Box sx={infoBox}>
        <Box>
          <Typography>{product.title}</Typography>
          <Typography
            variant="caption"
            color="text.secondary"
          >
            € {product.price}
          </Typography>
        </Box>
        <Box sx={totalPriceBox}>
          <Box sx={buttonsBox}>
            {product.quantity === 1 ? (
              <IconButton
                sx={iconButton}
                onClick={onRemove}
              >
                <DeleteIcon />
              </IconButton>
            ) : (
              <IconButton
                sx={iconButton}
                onClick={onSubstract}
              >
                <RemoveIcon />
              </IconButton>
            )}
            <Typography variant="body2">{product.quantity}</Typography>
            <IconButton
              sx={iconButton}
              onClick={onAdd}
            >
              <AddIcon />
            </IconButton>
          </Box>
          <Typography sx={{ flexShrink: 0 }}>
            € {product.price * product.quantity}
          </Typography>
        </Box>
      </Box>
    </ListItem>
  );
};

export default SingleItem;
