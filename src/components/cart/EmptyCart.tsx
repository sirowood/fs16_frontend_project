import { Box, Typography } from '@mui/material';

import Main from '../Main';
import { emptyCartBox } from '../../styles/cart';

const EmptyCart = () => {
  return (
    <Main>
      <Box sx={emptyCartBox}>
        <Typography
          variant="h4"
          textAlign="center"
        >
          No products in cart
        </Typography>
      </Box>
    </Main>
  );
};

export default EmptyCart;
