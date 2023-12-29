import { Box, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import Input from './Input';
import modalForm from '../../styles/form';
import { FormProps, AddressFormValues } from '../../types/form';

const AddressForm = ({
  title,
  control,
  errors,
  disabled,
  loading,
  submitButtonText,
  onSubmit,
}: FormProps<AddressFormValues>) => {
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
        disabled={loading}
        label="Street"
        name="street"
        control={control}
        errorMessage={errors.street?.message}
      />
      <Input
        disabled={loading}
        label="Post Code"
        name="postCode"
        control={control}
        errorMessage={errors.postCode?.message}
      />
      <Input
        disabled={loading}
        label="City"
        name="city"
        control={control}
        errorMessage={errors.city?.message}
      />
      <Input
        disabled={loading}
        label="Country"
        name="country"
        control={control}
        errorMessage={errors.country?.message}
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

export default AddressForm;
