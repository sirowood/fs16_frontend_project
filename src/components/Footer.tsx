import { Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '24px',
        bgcolor: 'background.default',
        color: 'text.primary',
        transition: 'all .5s ease',
      }}
    >
      Copyright ©Xuefeng
    </Box>
  );
};

export default Footer;
