import { SetStateAction } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

type ProductsControlProps = {
  searchTitle: string;
  pageSize: number;
  orderBy: string;
  setSearchTitle: (value: SetStateAction<string>) => void;
  setPageSize: (value: SetStateAction<number>) => void;
  setOrderBy: (value: SetStateAction<string>) => void;
};

const ProductsControl = ({
  searchTitle,
  pageSize,
  orderBy,
  setSearchTitle,
  setPageSize,
  setOrderBy,
}: ProductsControlProps) => {
  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        placeholder="Search by title..."
        size="small"
      />

      <FormControl>
        <InputLabel id="page-size-select-label">Page Size</InputLabel>
        <Select
          sx={{ minWidth: 80 }}
          labelId="page-size-select-label"
          size="small"
          label="Page Size"
          value={pageSize}
          onChange={(e) => setPageSize(+e.target.value)}
        >
          {[10, 20, 40].map((pageSize) => (
            <MenuItem
              key={pageSize}
              value={pageSize}
            >
              {pageSize}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="orderby-select-label">Order By</InputLabel>
        <Select
          sx={{ minWidth: 120 }}
          labelId="orderby-select-label"
          size="small"
          label="Orderby"
          value={orderBy}
          onChange={(e) => setOrderBy(e.target.value)}
        >
          {[
            'Default',
            'Cheapest first',
            'Expensive first',
            'Title A-Z',
            'Title Z-A',
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
    </div>
  );
};

export default ProductsControl;
