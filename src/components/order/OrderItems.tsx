import { Grid, List } from '@mui/material';

import SingleItem from './SingleItem';
import { OrderDetailRes } from '../../types/orderDetail';

const OrderItems = ({ orderDetails }: { orderDetails?: OrderDetailRes[] }) => {
  return (
    <Grid
      item
      xs={12}
      md={7}
    >
      <List>
        {orderDetails?.map((orderDetail) => (
          <SingleItem
            orderDetail={orderDetail}
            key={orderDetail.product.id}
          />
        ))}
      </List>
    </Grid>
  );
};

export default OrderItems;
