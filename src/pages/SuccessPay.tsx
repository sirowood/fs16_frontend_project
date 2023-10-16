import { Box, Typography } from '@mui/material';

import Main from '../components/Main';
import { successBox } from '../styles/success';

const SuccessPay = () => {
  return (
    <Main>
      <Box sx={successBox}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
        >
          Thank you for your order!
        </Typography>
        <Typography
          variant="body2"
          textAlign="center"
        >
          You will receive them very soon.
        </Typography>
      </Box>
    </Main>
  );
};

export default SuccessPay;
