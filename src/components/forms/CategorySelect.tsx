import { Controller } from 'react-hook-form';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';

import { useGetCategoriesQuery } from '../../redux/services/categoryApi';
import { CategorySelectProps } from '../../types/form';

const CategorySelect = ({
  errorMessage,
  defaultValue,
  control,
}: CategorySelectProps) => {
  const { data: categories } = useGetCategoriesQuery();

  return (
    <FormControl
      fullWidth
      sx={{ height: 70 }}
    >
      <InputLabel error={Boolean(errorMessage)}>Category</InputLabel>
      <Controller
        name="categoryId"
        control={control}
        render={({ field }) => (
          <Select
            size="small"
            label="Category"
            defaultValue={defaultValue}
            error={Boolean(errorMessage)}
            {...field}
          >
            <MenuItem
              value={0}
              disabled
            >
              Select one...
            </MenuItem>
            {categories?.map((category) => (
              <MenuItem
                key={category.id}
                value={category.id}
              >
                {category.name}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      <FormHelperText error>{errorMessage}</FormHelperText>
    </FormControl>
  );
};

export default CategorySelect;
