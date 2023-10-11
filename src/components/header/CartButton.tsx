import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Badge } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import useCart from '../../hooks/useCart';

const CartButton = () => {
  const navigate = useNavigate();
  const { cartBadgeContent } = useCart();

  const navigateToShoppingCart = useCallback(() => {
    navigate('cart');
  }, [navigate]);

  return (
    <IconButton
      size="large"
      onClick={navigateToShoppingCart}
    >
      <Badge
        badgeContent={cartBadgeContent}
        color="info"
      >
        <AddShoppingCartIcon color="primary" />
      </Badge>
    </IconButton>
  );
};

export default CartButton;
