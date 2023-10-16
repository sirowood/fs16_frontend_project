import { Box } from '@mui/material';

import MainNav from './MainNav';
import NavActions from './NavActions';
import { headerBox } from '../../styles/header';

const Header = () => {
  return (
    <Box
      component="header"
      sx={headerBox}
    >
      <MainNav />
      <NavActions />
    </Box>
  );
};

export default Header;
