import { useEffect, useMemo } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import Modal from './Modal';
import useAuthModal from '../../hooks/useLoginModal';
import { useLoginMutation } from '../../redux/services/authApi';
import loginFormSchema from '../../schemas/loginFormSchema';
import { LoginFormValues } from '../../types/form';

const LoginModal = () => {
  const [login, { isSuccess, isLoading }] = useLoginMutation();
  const { isOpen, onClose } = useAuthModal();
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
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    resolver: yupResolver(loginFormSchema),
    mode: 'all',
  });

  useEffect(() => {
    if (isSuccess) {
      onClose();
      reset();
    }
  }, [isSuccess, onClose, reset]);

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
    </Modal>
  );
};

export default LoginModal;
