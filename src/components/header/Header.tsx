import { Box } from '@mui/material';

import MainNav from './MainNav';
import Menu from './Menu';
import { headerBox } from '../../styles/header';

const Header = () => {
  return (
    <Box
      component="header"
      sx={headerBox}
    >
      <MainNav />
      <Menu />
    </Box>
  );
};

export default Header;
