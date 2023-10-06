import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

import { useAppSelector } from '../redux/store';
import UnAuthedPanel from './UnAuthedPanel';
import AuthedPanel from './AuthedPanel';

const Header = () => {
  const { user } = useAppSelector((state) => state.auth);
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
      {user ? <AuthedPanel avatar={user.avatar} /> : <UnAuthedPanel />}
    </Container>
  );
};

export default Header;
