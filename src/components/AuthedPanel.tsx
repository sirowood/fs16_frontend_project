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

import { useAppDispatch } from '../redux/store';
import { logout } from '../redux/reducers/authReducer';

const AuthedPanel = ({ avatar }: { avatar: string }) => {
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

  const handleNavigate = () => {
    handleCloseUserMenu();
    navigate('/profile');
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
          <MenuItem onClick={handleNavigate}>
            <ListItemIcon>
              <AccountCircleIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </MenuItem>
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
