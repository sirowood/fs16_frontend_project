import { Box, ListItem } from '@mui/material';

import DarkModeSwitch from './DarkModeSwitch';
import ShoppingBag from './ShoppingBag';
import { menuHeader } from '../../styles/header';

const MenuHeader = () => {
  return (
    <ListItem sx={menuHeader}>
      <DarkModeSwitch />
      <Box display={{ xs: 'block', md: 'none' }}>
        <ShoppingBag />
      </Box>
    </ListItem>
  );
};

export default MenuHeader;
