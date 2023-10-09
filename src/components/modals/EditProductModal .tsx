import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';

import Modal from './Modal';
import ProductForm from '../forms/ProductForm';
import productFormSchema from '../../schemas/productFormSchema';
import { useUpdateProductMutation } from '../../redux/services/productApi';
import useEditProductModal from '../../hooks/useEditProductModal';
import { ProductFormValues, FullProductFormValues } from '../../types/form';

const EditProductModal = () => {
  const [updateProduct, { isLoading, isSuccess }] = useUpdateProductMutation();
  const { isOpen, onClose, defaultValues } = useEditProductModal();

  const onSubmit: SubmitHandler<ProductFormValues> = (data) => {
    const { id, ...rest } = data as FullProductFormValues;
    const productNewData = {
      title: rest.title,
      price: rest.price,
      description: rest.description,
      categoryId: rest.categoryId,
      images: rest.images.map((image) => image.url),
    };
    updateProduct({ id, productNewData });
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({
    defaultValues,
    resolver: yupResolver(productFormSchema),
    mode: 'all',
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success('Update success!');
      onClose();
      reset();
    }
  }, [isSuccess, onClose, reset]);

  useEffect(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <ProductForm
        control={control}
        errors={errors}
        defaultValues={defaultValues}
        disabled={isLoading || !isValid || !isDirty}
        loading={isLoading}
        submitButtonText="Save"
        onSubmit={handleSubmit(onSubmit)}
      />
    </Modal>
  );
};

export default EditProductModal;
