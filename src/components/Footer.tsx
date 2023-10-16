import { Box, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { footerBox, iconsBox } from '../styles/footer';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={footerBox}
    >
      <Box sx={iconsBox}>
        <LinkedInIcon fontSize="large" />
        <InstagramIcon fontSize="large" />
        <TwitterIcon fontSize="large" />
        <YouTubeIcon fontSize="large" />
      </Box>
      <Typography textAlign="center">
        © 2023 Xuefeng. All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
