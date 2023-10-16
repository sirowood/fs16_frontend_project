import { Box, Button } from '@mui/material';

import { seeAllBox, seeAllButton } from '../../styles/home';

const SeeAll = () => {
  return (
    <Box
      sx={seeAllBox}
      component="section"
    >
      <Button
        variant="outlined"
        size="large"
        color="inherit"
        sx={seeAllButton}
      >
        See All
      </Button>
    </Box>
  );
};

export default SeeAll;
