import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Box,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ExploreIcon from '@mui/icons-material/Explore';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { useAppDispatch } from '../../redux/store';
import { logout } from '../../redux/reducers/authReducer';
import { avatar, avatarPaper, menuAvatarBox } from '../../styles/header';
import { UserRes } from '../../types/user';
import toast from 'react-hot-toast';

const Authed = ({ user }: { user: UserRes }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigateToProfile = useCallback(() => {
    navigate('/profile');
  }, [navigate]);

  const navigateToAdminCategories = useCallback(() => {
    navigate('/admin/categories');
  }, [navigate]);

  const navigateToAdminProducts = useCallback(() => {
    navigate('/admin/products');
  }, [navigate]);

  const navigateToAdminUsers = useCallback(() => {
    navigate('/admin/users');
  }, [navigate]);

  const navigateToAddresses = useCallback(() => {
    navigate('/addresses');
  }, [navigate]);

  const navigateToOrders = useCallback(() => {
    if (user.role === 'Admin') {
      navigate('/admin/orders');
    } else {
      navigate('/orders');
    }
  }, [navigate, user.role]);

  const handleLogout = useCallback(() => {
    dispatch(logout());
    toast.success('Logout success!');
    navigate('/');
  }, [dispatch, navigate]);

  return (
    <Box>
      <Box sx={menuAvatarBox}>
        <Paper
          sx={avatarPaper}
          elevation={24}
        >
          <Avatar
            src={user.avatar}
            sx={avatar}
          />
        </Paper>
        <Typography
          variant="h6"
          fontWeight="bold"
          fontFamily="monospace"
          noWrap
        >
          {`${user.firstName} ${user.lastName}`}
        </Typography>
      </Box>
      <Divider />
      <ListItem>
        <ListItemButton onClick={navigateToProfile}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </ListItemButton>
      </ListItem>
      {user.role === 'Admin' && (
        <>
          <ListItem>
            <ListItemButton onClick={navigateToAdminCategories}>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText>Categories</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={navigateToAdminProducts}>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText>Products</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={navigateToAdminUsers}>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText>Users</ListItemText>
            </ListItemButton>
          </ListItem>
        </>
      )}
      {user.role === 'Customer' && (
        <>
          <ListItem>
            <ListItemButton onClick={navigateToAddresses}>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText>Addresses</ListItemText>
            </ListItemButton>
          </ListItem>
        </>
      )}

      <ListItem>
        <ListItemButton onClick={navigateToOrders}>
          <ListItemIcon>
            <LocalMallIcon />
          </ListItemIcon>
          <ListItemText>Orders</ListItemText>
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
