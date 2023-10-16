import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import Input from './Input';
import loginFormSchema from '../../schemas/loginFormSchema';
import { useLoginMutation } from '../../redux/services/authApi';
import modalForm from '../../styles/form';
import { LoginFormValues } from '../../types/form';

const LoginForm = () => {
  const navigate = useNavigate();
  const [login, { isLoading, isSuccess }] = useLoginMutation();

  const defaultValues = useMemo(
    () => ({
      email: '',
      password: '',
    }),
    []
  );

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    login(data);
  };

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    resolver: yupResolver(loginFormSchema),
    mode: 'all',
  });

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
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
        Login
      </Typography>
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
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        disabled={isLoading || !isValid}
        loading={isLoading}
      >
        Login
      </LoadingButton>
    </Box>
  );
};

export default LoginForm;
