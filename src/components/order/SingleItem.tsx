import { ListItem, Box, Typography } from '@mui/material';

import {
  itemBox,
  imgBox,
  infoBox,
  buttonsBox,
  totalPriceBox,
} from '../../styles/cart';
import { OrderDetailRes } from '../../types/orderDetail';

const SingleItem = ({ orderDetail }: { orderDetail: OrderDetailRes }) => {
  return (
    <ListItem sx={itemBox}>
      <Box sx={imgBox}>
        <img
          src={orderDetail.product.images[0].url}
          alt={orderDetail.product.title}
          width="100%"
        />
      </Box>
      <Box sx={infoBox}>
        <Box>
          <Typography>{orderDetail.product.title}</Typography>
          <Typography
            variant="caption"
            color="text.secondary"
          >
            € {orderDetail.priceAtPurchase}
          </Typography>
        </Box>
        <Box sx={totalPriceBox}>
          <Box sx={buttonsBox}>
            <Typography variant="body2">x {orderDetail.quantity}</Typography>
          </Box>
          <Typography sx={{ flexShrink: 0 }}>
            € {(orderDetail.priceAtPurchase * orderDetail.quantity).toFixed(2)}
          </Typography>
        </Box>
      </Box>
    </ListItem>
  );
};

export default SingleItem;
