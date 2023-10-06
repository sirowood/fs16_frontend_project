import { useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from '@mui/material';

import { useUpdateUserMutation } from '../redux/services/userApi';
import { UpdateUserPasswordFormProps, User } from '../types/user';

const schema = yup.object({
  password: yup.string().min(8, 'At least 8 characters').required('Required'),
  confirmPassword: yup
    .string()
    .required('Required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

const UpdateUserPasswordForm = ({ id }: UpdateUserPasswordFormProps) => {
  const [updateUser, { isLoading, isSuccess }] = useUpdateUserMutation();
  const defaultValues = { password: '', confirmPassword: '' };

  const onSubmit: SubmitHandler<Pick<User, 'password'>> = (data) => {
    updateUser({ id, userNewData: { password: data.password } });
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
      reset();
    }
  }, [reset, isSuccess]);

  return (
    <Box
      component="form"
      sx={{
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h6">Password</Typography>

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            variant="standard"
            label="New password"
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
          'Save'
        )}
      </Button>
    </Box>
  );
};

export default UpdateUserPasswordForm;
