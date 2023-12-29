import {
  Box,
  MenuItem,
  Typography,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import Input from './Input';
import modalForm from '../../styles/form';
import { FormProps, AddUserFormValues } from '../../types/form';
import { Controller } from 'react-hook-form';

const AddUserForm = ({
  title,
  control,
  errors,
  disabled,
  defaultValues,
  loading,
  submitButtonText,
  onSubmit,
}: FormProps<AddUserFormValues>) => {
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={modalForm}
    >
      <Typography
        variant="h6"
        color="text.primary"
      >
        {title}
      </Typography>
      <FormControl
        fullWidth
        sx={{ height: 70 }}
      >
        <InputLabel error={Boolean(errors.role?.message)}>Role</InputLabel>
        <Controller
          control={control}
          name="role"
          render={({ field }) => (
            <Select
              size="small"
              label="Category"
              defaultValue={defaultValues?.role}
              error={Boolean(errors.role?.message)}
              {...field}
            >
              <MenuItem
                value={0}
                disabled
              >
                Select one...
              </MenuItem>
              <MenuItem value="Customer">Customer</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
            </Select>
          )}
        />
      </FormControl>
      <Input
        disabled={loading}
        label="First Name"
        name="firstName"
        control={control}
        errorMessage={errors.firstName?.message}
      />
      <Input
        disabled={loading}
        label="Last Name"
        name="lastName"
        control={control}
        errorMessage={errors.lastName?.message}
      />
      <Input
        disabled={loading}
        label="Email"
        name="email"
        type="email"
        control={control}
        errorMessage={errors.email?.message}
      />
      <Input
        disabled={loading}
        label="Password"
        name="password"
        type="password"
        control={control}
        errorMessage={errors.password?.message}
      />
      <Input
        disabled={loading}
        label="Confirm password"
        name="confirmPassword"
        type="password"
        control={control}
        errorMessage={errors.confirmPassword?.message}
      />
      <Input
        disabled={loading}
        label="Avatar"
        name="avatar"
        control={control}
        errorMessage={errors.avatar?.message}
      />
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        disabled={disabled}
        loading={loading}
      >
        {submitButtonText}
      </LoadingButton>
    </Box>
  );
};

export default AddUserForm;
