import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

import AuthedPanel from './AuthedPanel';
import ShoppingBag from './ShoppingBag';
import DarkModeSwitch from './DarkModeSwitch';
import { useAppSelector } from '../../redux/store';
import { navActions } from '../../styles/header';

const NavActions = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const navigateToLogin = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  return (
    <Box sx={navActions}>
      <DarkModeSwitch />
      <ShoppingBag />
      {user ? (
        <AuthedPanel
          avatar={user.avatar}
          role={user.role}
        />
      ) : (
        <Button
          color="inherit"
          variant="outlined"
          size="small"
          startIcon={<LoginIcon fontSize="small" />}
          onClick={navigateToLogin}
        >
          Login
        </Button>
      )}
    </Box>
  );
};

export default NavActions;
