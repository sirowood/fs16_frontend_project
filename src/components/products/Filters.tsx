import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

import { filterBox } from '../../styles/products';
import { FiltersProps } from '../../types/product';

const Filters = ({
  text,
  orderBy,
  changeText,
  changeOrderBy,
}: FiltersProps) => {
  return (
    <Box
      component="section"
      sx={filterBox}
    >
      <TextField
        label="Search by title"
        variant="outlined"
        value={text}
        onChange={changeText}
        size="small"
      />
      <FormControl>
        <InputLabel id="orderby-select-label">Order By</InputLabel>
        <Select
          labelId="orderby-select-label"
          size="small"
          label="Orderby"
          value={orderBy}
          onChange={changeOrderBy}
        >
          {[
            'Default',
            'Price Asc',
            'Price Desc',
            'Title Asc',
            'Title Desc',
          ].map((order) => (
            <MenuItem
              key={order}
              value={order}
            >
              {order}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filters;
