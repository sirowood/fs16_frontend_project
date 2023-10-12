import { useEffect, useMemo } from 'react';
import toast from 'react-hot-toast';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Modal from './Modal';
import ProductForm from '../forms/ProductForm';
import productFormSchema from '../../schemas/productFormSchema';
import useAddProductModal from '../../hooks/useAddProductModal';
import { useAddProductMutation } from '../../redux/services/productApi';
import { ProductFormValues } from '../../types/form';

const AddProductModal = () => {
  const [addProduct, { isLoading, isSuccess }] = useAddProductMutation();
  const { isOpen, onClose } = useAddProductModal();
  const defaultValues = useMemo(
    () => ({
      id: 0,
      title: '',
      price: 0,
      description: '',
      categoryId: 0,
      images: [{ url: '' }],
    }),
    []
  );

  const onSubmit: SubmitHandler<ProductFormValues> = (data) => {
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
    resolver: yupResolver(productFormSchema),
    mode: 'all',
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
      <ProductForm
        title="Add product"
        control={control}
        errors={errors}
        defaultValues={defaultValues}
        disabled={isLoading || !isValid}
        loading={isLoading}
        submitButtonText="Add product"
        onSubmit={handleSubmit(onSubmit)}
      />
    </Modal>
  );
};

export default AddProductModal;
