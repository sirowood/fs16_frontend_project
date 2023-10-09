import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

import { InputFieldProps } from '../../types/form';

const InputField = ({
  name,
  label,
  type = 'text',
  inputProps,
  control,
  errorMessage,
}: InputFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
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

export default InputField;
