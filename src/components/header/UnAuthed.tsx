import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

const UnAuthed = () => {
  const navigate = useNavigate();

  const navigateToLogin = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  return (
    <ListItem>
      <ListItemButton onClick={navigateToLogin}>
        <ListItemIcon>
          <LoginIcon />
        </ListItemIcon>
        <ListItemText>Login</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default UnAuthed;
