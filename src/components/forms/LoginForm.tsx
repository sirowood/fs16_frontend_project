import { Box, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import Input from './Input';
import { FormProps, LoginFormValues } from '../../types/form';
import modalForm from '../../styles/form';

const LoginForm = ({
  title,
  control,
  errors,
  disabled,
  loading,
  submitButtonText,
  onSubmit,
}: FormProps<LoginFormValues>) => {
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
        type="password"
        control={control}
        errorMessage={errors.password?.message}
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

export default LoginForm;
