import { Link, useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import { desktopNavBox, desktopNavLinkText } from '../../styles/header';
import { Category } from '../../types/category';

const DesktopNav = ({ categories }: { categories?: Category[] }) => {
  const { pathname } = useLocation();

  return (
    <Box sx={desktopNavBox}>
      {categories?.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.id}`}
          style={{ textDecoration: 'none' }}
        >
          <Typography
            variant="body2"
            color={
              pathname === `/category/${category.id}`
                ? 'text.primary'
                : 'text.secondary'
            }
            sx={desktopNavLinkText}
          >
            {category.name}
          </Typography>
        </Link>
      ))}
    </Box>
  );
};

export default DesktopNav;
