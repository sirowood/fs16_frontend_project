import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import Input from './Input';
import updateUserInfoFormSchema from '../../schemas/updateUserInfoFormSchema';
import { useUpdateUserMutation } from '../../redux/services/userApi';
import { UpdateUserInfoFormProps } from '../../types/user';
import { updateUserForm } from '../../styles/profile';

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
    resolver: yupResolver(updateUserInfoFormSchema),
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
      sx={updateUserForm}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h6">User information</Typography>
      <Input
        name="name"
        label="Name"
        control={control}
        errorMessage={errors.name?.message}
      />
      <Input
        name="email"
        label="Email"
        control={control}
        errorMessage={errors.email?.message}
      />
      <Input
        name="avatar"
        label="Avatar"
        control={control}
        errorMessage={errors.avatar?.message}
      />
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        disabled={isLoading || !isValid || !isDirty}
        loading={isLoading}
      >
        Save
      </LoadingButton>
    </Box>
  );
};

export default UpdateUserInfoForm;
