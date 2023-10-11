import { Link } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

import { useAppSelector } from '../../redux/store';
import UnAuthedPanel from './UnAuthedPanel';
import AuthedPanel from './AuthedPanel';
import DarkModeSwitch from './DarkModeSwitch';
import CartButton from './CartButton';

const Header = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Container
      component="header"
      sx={{
        position: 'sticky',
        top: '0px',
        zIndex: '100',
        bgcolor: 'background.default',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '56px',
        borderRadius: '4px',
        marginBottom: '16px',
      }}
    >
      <Link
        to="/"
        style={{ textDecoration: 'none' }}
      >
        <Typography color={'text.primary'}>Home</Typography>
      </Link>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
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
    </Container>
  );
};

export default Header;
