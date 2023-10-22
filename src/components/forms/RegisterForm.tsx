import { useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Typography, CircularProgress } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import CheckIcon from '@mui/icons-material/Check';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import Input from './Input';
import {
  useLazyCheckEmailQuery,
  useRegisterMutation,
} from '../../redux/services/userApi';
import registerFormSchema from '../../schemas/registerFormSchema';
import modalForm from '../../styles/form';
import { RegisterFormValues } from '../../types/form';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [register, { isLoading, isSuccess }] = useRegisterMutation();
  const [checkEmail, { data: emailAvailable, isFetching }] =
    useLazyCheckEmailQuery();

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
    watch,
    formState: { errors, isValid, touchedFields },
  } = useForm({
    defaultValues,
    resolver: yupResolver(registerFormSchema),
    mode: 'all',
  });

  const email = watch('email');

  useEffect(() => {
    if (touchedFields.email && !errors.email) {
      checkEmail(email);
    }
  }, [checkEmail, email, errors.email, touchedFields.email]);

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
        InputProps={{
          endAdornment: isFetching ? (
            <CircularProgress
              size={16}
              color="primary"
            />
          ) : !errors.email && emailAvailable ? (
            <CheckIcon
              fontSize="small"
              color="success"
            />
          ) : (
            email && (
              <HighlightOffIcon
                fontSize="small"
                color="error"
              />
            )
          ),
        }}
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
        disabled={isLoading || isFetching || !isValid || !emailAvailable}
        loading={isLoading}
      >
        Register
      </LoadingButton>
    </Box>
  );
};

export default RegisterForm;
