import { Controller, FieldValues } from 'react-hook-form';
import { TextField } from '@mui/material';

import { CustomInputProps } from '../../types/form';

const Input = <T extends FieldValues>({
  disabled,
  name,
  label,
  type = 'text',
  inputProps,
  InputProps,
  control,
  errorMessage,
}: CustomInputProps<T>) => {
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
          InputProps={InputProps}
          inputProps={inputProps}
          sx={{ height: 70 }}
          {...field}
        />
      )}
    />
  );
};

export default Input;
