import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ExploreIcon from '@mui/icons-material/Explore';

import { useAppDispatch } from '../redux/store';
import { logout } from '../redux/reducers/authReducer';

const AuthedPanel = ({ avatar, role }: { avatar: string; role: string }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    handleCloseUserMenu();
    dispatch(logout());
  };

  const navigateToProfile = () => {
    handleCloseUserMenu();
    navigate('/profile');
  };

  const navigateToDashboard = () => {
    handleCloseUserMenu();
    navigate('/dashboard');
  };

  return (
    <Box>
      <IconButton
        onClick={handleOpenUserMenu}
        size="small"
        sx={{ padding: '0px' }}
      >
        <Avatar src={avatar} />
      </IconButton>
      <Menu
        sx={{ mt: '52px' }}
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuList>
          <MenuItem onClick={navigateToProfile}>
            <ListItemIcon>
              <AccountCircleIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </MenuItem>
          {role === 'admin' && (
            <MenuItem onClick={navigateToDashboard}>
              <ListItemIcon>
                <ExploreIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </MenuItem>
          )}
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default AuthedPanel;
