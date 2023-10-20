import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Box, Button, Typography } from '@mui/material';

import { mobileNavBox, mobileNavButton } from '../../styles/header';
import { Category } from '../../types/category';

const MobileNav = ({ categories }: { categories?: Category[] }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={mobileNavBox}>
      <Button
        onClick={handleClick}
        sx={mobileNavButton}
      >
        Products
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {categories?.slice(0, 5).map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            style={{ textDecoration: 'none' }}
          >
            <MenuItem onClick={handleClose}>
              <Typography
                variant="body2"
                color="text.primary"
              >
                {category.name}
              </Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </Box>
  );
};

export default MobileNav;
