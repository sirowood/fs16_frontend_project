import { useMemo, useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, TextField, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import Modal from './Modal';
import useRegisterModal from '../hooks/useRegisterModal';
import { useRegisterMutation } from '../redux/services/userApi';
import { RegisterFormData } from '../types/modal';

const schema = yup.object({
  name: yup.string().min(4, 'At least 4 characters').required('Required'),
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup.string().min(8, 'At least 8 characters').required('Required'),
  confirmPassword: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  avatar: yup.string().required('Avatar required'),
  role: yup.string().required(),
});

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

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    register(data);
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
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
        <Button
          variant="contained"
          type="submit"
          disabled={isLoading || !isValid}
        >
          {isLoading ? (
            <CircularProgress
              size="24px"
              color="inherit"
            />
          ) : (
            'Register'
          )}
        </Button>
      </Box>
    </Modal>
  );
};

export default RegisterModal;
