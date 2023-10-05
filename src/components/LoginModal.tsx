import { useEffect, useMemo } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, TextField, Button } from '@mui/material';

import Modal from './Modal';
import useAuthModal from '../hooks/useLoginModal';
import { useLoginMutation } from '../redux/services/authApi';
import { LoginFormData } from '../types/modal';

const schema = yup.object({
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup.string().required('Required'),
});

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

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    login({ ...data });
  };

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess, onClose]);

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
        <Button
          variant="contained"
          type="submit"
          disabled={isLoading || !isValid}
        >
          Login
        </Button>
      </Box>
    </Modal>
  );
};

export default LoginModal;
