import { Box, Typography } from '@mui/material';
import {
  billboardContainer,
  billboardSection,
  billboardText,
} from '../../styles/home';

const Billboard = () => {
  return (
    <Box
      component="section"
      sx={billboardSection}
    >
      <Box sx={billboardContainer}>
        <Typography sx={billboardText}>Everything you DON'T? need</Typography>
      </Box>
    </Box>
  );
};

export default Billboard;
