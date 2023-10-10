import { Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import Input from './Input';
import CategorySelect from './CategorySelect';
import ImageURLFields from './ImageURLFields';
import { FormProps, ProductFormValues } from '../../types/form';

const ProductForm = ({
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
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
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
        type="number"
        control={control}
        errorMessage={errors.price?.message}
        inputProps={{
          min: 0,
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
