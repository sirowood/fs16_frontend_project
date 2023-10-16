import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import Input from './Input';
import updateUserPasswordFormScheme from '../../schemas/updateUserPasswordFormSchema';
import { useUpdateUserMutation } from '../../redux/services/userApi';
import { updateUserForm } from '../../styles/profile';
import { UpdateUserPasswordFormProps, User } from '../../types/user';

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
    resolver: yupResolver(updateUserPasswordFormScheme),
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
      sx={updateUserForm}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h6">Password</Typography>

      <Input
        control={control}
        name="password"
        label="Password"
        type="password"
        errorMessage={errors.password?.message}
      />
      <Input
        control={control}
        name="confirmPassword"
        label="Confirm password"
        type="password"
        errorMessage={errors.confirmPassword?.message}
      />
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        disabled={isLoading || !isValid}
        loading={isLoading}
      >
        Save
      </LoadingButton>
    </Box>
  );
};

export default UpdateUserPasswordForm;
