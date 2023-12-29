import { Box, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import Input from './Input';
import CategorySelect from './CategorySelect';
import ImageURLFields from './ImageURLFields';
import modalForm from '../../styles/form';
import { FormProps, ProductFormValues } from '../../types/form';

const ProductForm = ({
  title,
  control,
  errors,
  defaultValues,
  disabled,
  loading,
  submitButtonText,
  onSubmit,
}: FormProps<ProductFormValues>) => {
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
      <CategorySelect
        control={control}
        errorMessage={errors?.categoryId?.message}
        defaultValue={defaultValues?.categoryId}
      />
      <Input
        label="Title"
        name="title"
        control={control}
        errorMessage={errors.title?.message}
      />
      <Input
        label="Description"
        name="description"
        control={control}
        errorMessage={errors.description?.message}
      />
      <Input
        label="Price"
        name="price"
        control={control}
        errorMessage={errors.price?.message}
        inputProps={{
          pattern: '[0-9]+([.][0-9]{1,2})?',
          inputMode: 'numeric',
        }}
      />
      <ImageURLFields
        control={control}
        errors={errors}
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

export default ProductForm;
