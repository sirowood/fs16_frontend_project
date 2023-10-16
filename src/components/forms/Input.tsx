import { Controller, FieldValues } from 'react-hook-form';
import { TextField } from '@mui/material';

import { InputProps } from '../../types/form';

const Input = <T extends FieldValues>({
  disabled,
  name,
  label,
  type = 'text',
  inputProps,
  control,
  errorMessage,
}: InputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          disabled={disabled}
          fullWidth
          variant="standard"
          label={label}
          type={type}
          error={!!errorMessage}
          helperText={errorMessage}
          inputProps={inputProps}
          sx={{ height: 70 }}
          {...field}
        />
      )}
    />
  );
};

export default Input;
