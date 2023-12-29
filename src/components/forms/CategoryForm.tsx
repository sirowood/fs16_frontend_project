import { Box, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import Input from './Input';
import modalForm from '../../styles/form';
import { FormProps, CategoryFormValues } from '../../types/form';

const CategoryForm = ({
  title,
  control,
  errors,
  disabled,
  loading,
  submitButtonText,
  onSubmit,
}: FormProps<CategoryFormValues>) => {
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={modalForm}
    >
      <Typography
        variant="h6"
        color="text.primary"
      >
        {title}
      </Typography>
      <Input
        label="Name"
        name="name"
        control={control}
        errorMessage={errors.name?.message}
      />
      <Input
        label="Image"
        name="image"
        control={control}
        errorMessage={errors.image?.message}
      />
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        disabled={disabled}
        loading={loading}
      >
        {submitButtonText}
      </LoadingButton>
    </Box>
  );
};

export default CategoryForm;
