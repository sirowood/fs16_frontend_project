import { Grid, Typography, List, ListItem } from '@mui/material';

import { whyUsHightlightsBox } from '../../styles/home';

const WhyUs = () => {
  return (
    <Grid
      component="section"
      marginTop="24px"
      container
      spacing={4}
    >
      <Grid
        item
        xs={12}
        md={6}
      >
        <Typography variant="h6">WHY SHOP WITH US?</Typography>
        <Typography marginTop="16px">
          With unbeatable deals, top-notch customer service, and a vast
          selection of products, you will wonder why you ever shopped elsewhere.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
      >
        <Typography variant="h6">SHOPAHOLIC HIGHLIGHTS</Typography>
        <List>
          <ListItem
            sx={whyUsHightlightsBox}
            divider
            disablePadding
          >
            <Typography>Free Shipping</Typography>
            <Typography>2023</Typography>
          </ListItem>
          <ListItem
            sx={whyUsHightlightsBox}
            divider
            disablePadding
          >
            <Typography>One-Day Delivery</Typography>
            <Typography>2022</Typography>
          </ListItem>
          <ListItem
            sx={whyUsHightlightsBox}
            disablePadding
          >
            <Typography>14 Days Return</Typography>
            <Typography>2021</Typography>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default WhyUs;
