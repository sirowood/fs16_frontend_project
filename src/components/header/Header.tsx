import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Typography, IconButton, Badge, Box } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useAppSelector } from '../../redux/store';
import UnAuthedPanel from './UnAuthedPanel';
import AuthedPanel from './AuthedPanel';
import useCart from '../../hooks/useCart';

const Header = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const { cartBadgeContent } = useCart();

  const navigateToShoppingCart = useCallback(() => {
    navigate('cart');
  }, [navigate]);

  return (
    <Container
      component="header"
      sx={{
        bgcolor: '#FAFAFA',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '56px',
        borderRadius: '4px',
        boxShadow: '0px 4px 4px 2px #EEE',
      }}
    >
      <Link
        to="/"
        style={{ textDecoration: 'none' }}
      >
        <Typography color={'black'}>Home</Typography>
      </Link>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
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
        {user ? (
          <AuthedPanel
            avatar={user.avatar}
            role={user.role}
          />
        ) : (
          <UnAuthedPanel />
        )}
      </Box>
    </Container>
  );
};

export default Header;
