import { ReactNode } from 'react';
import { Box } from '@mui/material';

import mainStyle from '../styles/main';

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      component="main"
      sx={mainStyle}
    >
      {children}
    </Box>
  );
};

export default Main;
