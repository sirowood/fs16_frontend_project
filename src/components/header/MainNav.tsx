import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import { useGetCategoriesQuery } from '../../redux/services/categoryApi';
import { headerNav, headerTitle } from '../../styles/header';

const MainNav = () => {
  const { data: categories } = useGetCategoriesQuery({ limit: 100, offset: 0 });

  return (
    <Box
      component="nav"
      sx={headerNav}
    >
      <Link
        to="/"
        style={{ textDecoration: 'none' }}
      >
        <Typography
          sx={headerTitle}
          variant="h6"
        >
          STORE
        </Typography>
      </Link>
      <MobileNav categories={categories?.items} />
      <DesktopNav categories={categories?.items} />
    </Box>
  );
};

export default MainNav;
