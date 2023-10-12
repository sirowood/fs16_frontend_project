import { ReactNode } from 'react';
import { Box, SxProps, Theme } from '@mui/material';

type MainProps = {
  children: ReactNode;
  sx?: SxProps<Theme>;
};

const Main = ({ children, sx }: MainProps) => {
  return (
    <Box
      component="main"
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        transition: 'all .5s ease',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '24px',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Main;
