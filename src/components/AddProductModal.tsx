import { useEffect, useMemo } from 'react';
import {
  useForm,
  SubmitHandler,
  Controller,
  useFieldArray,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  FormHelperText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import LoadingButton from '@mui/lab/LoadingButton';

import Modal from './Modal';
import useAddProductModal from '../hooks/useAddProductModal';
import { useAddProductMutation } from '../redux/services/productApi';
import { useAppSelector } from '../redux/store';
import { useGetCategoriesQuery } from '../redux/services/categoryApi';
import toast from 'react-hot-toast';

const schema = yup.object({
  title: yup.string().min(4, 'At least 4 characters').required('Required'),
  price: yup
    .number()
    .typeError('Must be a number')
    .min(1, 'At least 1')
    .required('Required'),
  description: yup
    .string()
    .min(4, 'At least 4 characters')
    .required('Required'),
  categoryId: yup
    .number()
    .min(1, 'Please select a category')
    .required('required'),
  images: yup
    .array()
    .of(
      yup.object().shape({
        url: yup.string().url('Invalid URL format').required('Required'),
      })
    )
    .required('At least one image URL is required'),
});

type DefaultValues = {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: { url: string }[];
};

const AddProductModal = () => {
  useGetCategoriesQuery();
  const categories = useAppSelector((state) => state.categories);
  const [addProduct, { isLoading, isSuccess }] = useAddProductMutation();
  const { isOpen, onClose } = useAddProductModal();
  const defaultValues = useMemo(
    () => ({
      title: '',
      price: 0,
      description: '',
      categoryId: 0,
      images: [{ url: '' }],
    }),
    []
  );

  const onSubmit: SubmitHandler<DefaultValues> = (data) => {
    const newProduct = {
      title: data.title,
      price: data.price,
      description: data.description,
      categoryId: data.categoryId,
      images: data.images.map((image) => image.url),
    };
    addProduct(newProduct);
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'images',
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success('Add new product success!');
      onClose();
      reset();
    }
  }, [isSuccess, onClose, reset]);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <FormControl
          fullWidth
          sx={{ height: 70 }}
        >
          <InputLabel error={Boolean(errors.categoryId?.message)}>
            Category
          </InputLabel>
          <Controller
            name="categoryId"
            control={control}
            render={({ field }) => (
              <Select
                size="small"
                label="Category"
                defaultValue={0}
                error={Boolean(errors.categoryId?.message)}
                {...field}
              >
                <MenuItem
                  value={0}
                  disabled
                >
                  Select one...
                </MenuItem>
                {categories.map((category) => (
                  <MenuItem
                    key={category.id}
                    value={category.id}
                  >
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          <FormHelperText error>{errors.categoryId?.message}</FormHelperText>
        </FormControl>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              variant="standard"
              label="Title"
              error={Boolean(errors.title?.message)}
              helperText={errors.title?.message}
              sx={{ height: 70 }}
              {...field}
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              variant="standard"
              label="Description"
              error={Boolean(errors.description?.message)}
              helperText={errors.description?.message}
              sx={{ height: 70 }}
              {...field}
            />
          )}
        />
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              variant="standard"
              label="Price"
              type="number"
              inputProps={{
                min: 0,
              }}
              error={Boolean(errors.price?.message)}
              helperText={errors.price?.message}
              sx={{ height: 70 }}
              {...field}
            />
          )}
        />

        {fields.map((item, index) => (
          <Box
            key={item.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Controller
              name={`images.${index}.url`}
              control={control}
              render={({ field }) => (
                <TextField
                  variant="standard"
                  label={`Image ${index + 1}`}
                  error={!!errors.images?.[index]?.url}
                  helperText={errors.images?.[index]?.url?.message ?? ''}
                  sx={{ height: 70 }}
                  {...field}
                />
              )}
            />
            <IconButton
              disabled={index === 0}
              size="small"
              color="error"
              onClick={() => remove(index)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
        <Button
          disabled={fields.length >= 3}
          sx={{ marginBottom: '16px' }}
          size="small"
          color="success"
          onClick={() => append({ url: '' })}
        >
          Add more image
        </Button>

        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          disabled={isLoading || !isValid}
          loading={isLoading}
        >
          Add product
        </LoadingButton>
      </Box>
    </Modal>
  );
};

export default AddProductModal;
