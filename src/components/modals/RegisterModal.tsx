import { useMemo, useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import Modal from './Modal';
import useRegisterModal from '../../hooks/useRegisterModal';
import { useRegisterMutation } from '../../redux/services/userApi';
import registerFormSchema from '../../schemas/registerFormSchema';
import { RegisterFormValues } from '../../types/form';

const RegisterModal = () => {
  const { isOpen, onClose } = useRegisterModal();
  const [register, { isLoading, isSuccess }] = useRegisterMutation();

  const defaultValues = useMemo(
    () => ({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'customer',
      avatar: '',
    }),
    []
  );

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    register(data);
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    resolver: yupResolver(registerFormSchema),
    mode: 'all',
  });

  useEffect(() => {
    if (isSuccess) {
      onClose();
      reset();
    }
  }, [onClose, reset, isSuccess]);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              variant="standard"
              label="Name"
              error={Boolean(errors.name?.message)}
              helperText={errors.name?.message}
              sx={{ height: 80 }}
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              variant="standard"
              label="Email"
              error={Boolean(errors.email?.message)}
              helperText={errors.email?.message}
              sx={{ height: 80 }}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              variant="standard"
              label="Password"
              type="password"
              error={Boolean(errors.password?.message)}
              helperText={errors.password?.message}
              sx={{ height: 80 }}
              {...field}
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <TextField
              variant="standard"
              label="Confirm password"
              type="password"
              error={Boolean(errors.confirmPassword?.message)}
              helperText={errors.confirmPassword?.message}
              sx={{ height: 80 }}
              {...field}
            />
          )}
        />
        <Controller
          name="avatar"
          control={control}
          render={({ field }) => (
            <TextField
              variant="standard"
              label="Avatar"
              error={Boolean(errors.avatar?.message)}
              helperText={errors.avatar?.message}
              sx={{ height: 80 }}
              {...field}
            />
          )}
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
    </Modal>
  );
};

export default RegisterModal;
