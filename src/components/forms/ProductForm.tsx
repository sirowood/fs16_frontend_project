import { Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import CategorySelect from './CategorySelect';
import ImageURLFields from './ImageURLFields';
import InputField from './InputField';
import { ProductFormProps } from '../../types/form';

const ProductForm = ({
  control,
  errors,
  defaultValues,
  disabled,
  loading,
  submitButtonText,
  onSubmit,
}: ProductFormProps) => {
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
        defaultValue={defaultValues.categoryId}
      />
      <InputField
        label="Title"
        name="title"
        control={control}
        errorMessage={errors.title?.message}
      />
      <InputField
        label="Description"
        name="description"
        control={control}
        errorMessage={errors.description?.message}
      />
      <InputField
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
