import { useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import Input from './Input';
import { useRegisterMutation } from '../../redux/services/userApi';
import registerFormSchema from '../../schemas/registerFormSchema';
import modalForm from '../../styles/form';
import { RegisterFormValues } from '../../types/form';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [register, { isLoading, isSuccess }] = useRegisterMutation();

  const defaultValues = useMemo(
    () => ({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      avatar: '',
    }),
    []
  );

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    register({ ...data, role: 'customer' });
  };

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    resolver: yupResolver(registerFormSchema),
    mode: 'all',
  });

  useEffect(() => {
    if (isSuccess) {
      navigate('/login');
    }
  }, [isSuccess, navigate]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={modalForm}
    >
      <Typography
        variant="h4"
        color="text.primary"
        fontWeight="bold"
      >
        Register
      </Typography>
      <Input
        disabled={isLoading}
        label="Name"
        name="name"
        control={control}
        errorMessage={errors.name?.message}
      />
      <Input
        disabled={isLoading}
        label="Email"
        name="email"
        type="email"
        control={control}
        errorMessage={errors.email?.message}
      />
      <Input
        disabled={isLoading}
        label="Password"
        name="password"
        type="password"
        control={control}
        errorMessage={errors.password?.message}
      />
      <Input
        disabled={isLoading}
        label="Confirm password"
        name="confirmPassword"
        type="password"
        control={control}
        errorMessage={errors.confirmPassword?.message}
      />
      <Input
        disabled={isLoading}
        label="Avatar"
        name="avatar"
        control={control}
        errorMessage={errors.avatar?.message}
      />
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        disabled={isLoading || !isValid}
        loading={isLoading}
      >
        Register
      </LoadingButton>
    </Box>
  );
};

export default RegisterForm;
