import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import useCart from '../../hooks/useCart';
import { shoppingBag } from '../../styles/header';

const ShoppingBag = () => {
  const navigate = useNavigate();
  const { cartBadgeContent } = useCart();

  const navigateToShoppingCart = useCallback(() => {
    navigate('cart');
  }, [navigate]);

  return (
    <Button
      variant="contained"
      sx={shoppingBag}
      startIcon={<ShoppingBagIcon color="inherit" />}
      onClick={navigateToShoppingCart}
    >
      <Typography variant="body2">{cartBadgeContent}</Typography>
    </Button>
  );
};

export default ShoppingBag;
