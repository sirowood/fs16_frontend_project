import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import Input from './Input';
import updatePasswordFormScheme from '../../schemas/updatePasswordFormSchema';
import { useChangePasswordMutation } from '../../redux/services/userApi';
import { updateUserForm } from '../../styles/profile';
import { ChangePasswordReq } from '../../types/user';
import toast from 'react-hot-toast';

const UpdatePasswordForm = () => {
  const [updateUser, { isLoading, isSuccess }] = useChangePasswordMutation();
  const defaultValues = {
    originalPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const onSubmit: SubmitHandler<ChangePasswordReq> = (data) => {
    updateUser({
      originalPassword: data.originalPassword,
      newPassword: data.newPassword,
    });
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    resolver: yupResolver(updatePasswordFormScheme),
    mode: 'all',
  });

  useEffect(() => {
    if (isSuccess) {
      reset();
      toast.success('Password change success!');
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
        name="originalPassword"
        label="Current Password"
        type="password"
        errorMessage={errors.originalPassword?.message}
      />
      <Input
        control={control}
        name="newPassword"
        label="New Password"
        type="password"
        errorMessage={errors.newPassword?.message}
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

export default UpdatePasswordForm;
