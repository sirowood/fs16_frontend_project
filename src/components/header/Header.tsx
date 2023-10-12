import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

import { useAppSelector } from '../../redux/store';
import UnAuthedPanel from './UnAuthedPanel';
import AuthedPanel from './AuthedPanel';
import DarkModeSwitch from './DarkModeSwitch';
import CartButton from './CartButton';
import { headerBox, headerButtonsBox } from '../../styles/header';

const Header = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Box
      component="header"
      sx={headerBox}
    >
      <Link
        to="/"
        style={{ textDecoration: 'none' }}
      >
        <Typography color={'text.primary'}>Home</Typography>
      </Link>
      <Box sx={headerButtonsBox}>
        <DarkModeSwitch />
        <CartButton />
        {user ? (
          <AuthedPanel
            avatar={user.avatar}
            role={user.role}
          />
        ) : (
          <UnAuthedPanel />
        )}
      </Box>
    </Box>
  );
};

export default Header;
