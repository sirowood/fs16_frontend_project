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

import { useAppDispatch } from '../../redux/store';
import { logout } from '../../redux/reducers/authReducer';
import { avatar, avatarPaper, menuAvatarBox } from '../../styles/header';
import { User } from '../../types/user';

const Authed = ({ user }: { user: User }) => {
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
          {user.name}
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
      {user.role === 'admin' && (
        <ListItem>
          <ListItemButton onClick={navigateToDashboard}>
            <ListItemIcon>
              <ExploreIcon />
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItemButton>
        </ListItem>
      )}

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
