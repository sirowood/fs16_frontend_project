import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import Input from './Input';
import updateProfileFormSchema from '../../schemas/updateProfileFormSchema';
import { updateUserForm } from '../../styles/profile';
import { UpdateProfileFormProps } from '../../types/user';
import { useUpdateProfileMutation } from '../../redux/services/authApi';

const UpdateProfileForm = ({
  id,
  ...defaultValues
}: UpdateProfileFormProps) => {
  const [updateUser, { isLoading, isSuccess, isError }] =
    useUpdateProfileMutation();

  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors, isValid, isDirty },
  } = useForm({
    defaultValues,
    resolver: yupResolver(updateProfileFormSchema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<Omit<UpdateProfileFormProps, 'id'>> = (
    data
  ) => {
    updateUser({ id, userNewData: data });
  };

  useEffect(() => {
    if (isSuccess) {
      reset({
        firstName: getValues().firstName,
        lastName: getValues().lastName,
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
        name="firstName"
        label="First Name"
        control={control}
        errorMessage={errors.firstName?.message}
      />
      <Input
        name="lastName"
        label="Last Name"
        control={control}
        errorMessage={errors.lastName?.message}
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

export default UpdateProfileForm;
