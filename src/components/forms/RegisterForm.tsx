import { Box, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import Input from './Input';
import { FormProps, RegisterFormValues } from '../../types/form';
import modalForm from '../../styles/form';

const RegisterForm = ({
  title,
  control,
  errors,
  disabled,
  loading,
  submitButtonText,
  onSubmit,
}: FormProps<RegisterFormValues>) => {
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
      <Input
        label="Email"
        name="email"
        type="email"
        control={control}
        errorMessage={errors.email?.message}
      />
      <Input
        label="Password"
        name="password"
        control={control}
        errorMessage={errors.password?.message}
      />
      <Input
        label="Confirm password"
        name="confirmPassword"
        control={control}
        errorMessage={errors.confirmPassword?.message}
      />
      <Input
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

export default RegisterForm;
