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
import { UpdateUserInfoFormProps } from '../types/user';

const schema = yup.object({
  name: yup.string().min(4, 'At least 4 characters').required('Required'),
  email: yup.string().email('Invalid email address').required('Required'),
  avatar: yup.string().required('Avatar required'),
});

const UpdateUserInfoForm = ({
  id,
  ...defaultValues
}: UpdateUserInfoFormProps) => {
  const [updateUser, { isLoading, isSuccess, isError }] =
    useUpdateUserMutation();

  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors, isValid, isDirty },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<Omit<UpdateUserInfoFormProps, 'id'>> = (
    data
  ) => {
    updateUser({ id, userNewData: data });
  };

  useEffect(() => {
    if (isSuccess) {
      reset({
        name: getValues().name,
        email: getValues().email,
        avatar: getValues().avatar,
      });
    } else if (isError) {
      reset();
    }
  }, [reset, isSuccess, getValues, isError]);

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
      <Typography variant="h6">User information</Typography>
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
        disabled={isLoading || !isValid || !isDirty}
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

export default UpdateUserInfoForm;
