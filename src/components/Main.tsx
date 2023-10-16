import { ReactNode } from 'react';
import { Box, Container } from '@mui/material';

import mainStyle from '../styles/main';

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      component="main"
      sx={mainStyle}
    >
      <Container maxWidth="xl">{children}</Container>
    </Box>
  );
};

export default Main;
