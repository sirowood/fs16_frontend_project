import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ExploreIcon from '@mui/icons-material/Explore';

import { useAppDispatch } from '../../redux/store';
import { logout } from '../../redux/reducers/authReducer';

const Authed = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigateToProfile = useCallback(() => {
    navigate('/profile');
  }, [navigate]);

  const navigateToDashboard = useCallback(() => {
    navigate('/dashboard');
  }, [navigate]);

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <Box>
      <ListItem>
        <ListItemButton onClick={navigateToProfile}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton onClick={navigateToDashboard}>
          <ListItemIcon>
            <ExploreIcon />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </ListItemButton>
      </ListItem>
    </Box>
  );
};

export default Authed;
