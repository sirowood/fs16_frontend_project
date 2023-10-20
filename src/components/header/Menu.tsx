import { useCallback, useState } from 'react';
import { Box, IconButton, SwipeableDrawer, List, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import MenuHeader from './MenuHeader';
import MenuBody from './MenuBody';
import ShoppingBag from './ShoppingBag';

const Menu = () => {
  const [open, setOpen] = useState(false);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
      >
        <Box display={{ xs: 'none', md: 'block' }}>
          <ShoppingBag />
        </Box>
        <IconButton onClick={onOpen}>
          <MenuIcon fontSize="large" />
        </IconButton>
      </Box>

      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={onOpen}
        onClose={onClose}
      >
        <Box
          role="presentation"
          onClick={onClose}
          onKeyDown={onClose}
        >
          <List>
            <MenuHeader />
            <Divider />
            <MenuBody />
          </List>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default Menu;
