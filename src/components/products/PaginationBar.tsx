import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Pagination,
} from '@mui/material';

import { pageSizeSelect, paginationBarBox } from '../../styles/products';
import { PaginationBarProps } from '../../types/product';

const PaginationBar = ({
  limit,
  page,
  count,
  changeLimit,
  changePage,
}: PaginationBarProps) => {
  return (
    <Box sx={paginationBarBox}>
      <FormControl sx={pageSizeSelect}>
        <InputLabel id="page-size-select-label">Size</InputLabel>
        <Select
          labelId="page-size-select-label"
          size="small"
          label="Size"
          value={limit}
          onChange={changeLimit}
        >
          {[12, 24, 36].map((pageSize) => (
            <MenuItem
              key={pageSize}
              value={pageSize}
            >
              {pageSize}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Pagination
        size="small"
        page={page}
        count={count}
        onChange={changePage}
      />
    </Box>
  );
};

export default PaginationBar;
