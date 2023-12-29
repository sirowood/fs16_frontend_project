import { useEffect, useMemo } from 'react';
import toast from 'react-hot-toast';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Modal from './Modal';
import CategoryForm from '../forms/CategoryForm';
import CategoryFormSchema from '../../schemas/categoryFormSchema';
import useAddCategoryModal from '../../hooks/useAddCategoryModal';
import { useAddCategoryMutation } from '../../redux/services/categoryApi';
import { CategoryFormValues } from '../../types/form';

const AddCategoryModal = () => {
  const [addCategory, { isLoading, isSuccess }] = useAddCategoryMutation();
  const { isOpen, onClose } = useAddCategoryModal();
  const defaultValues = useMemo(
    () => ({
      name: '',
      image: '',
    }),
    []
  );

  const onSubmit: SubmitHandler<CategoryFormValues> = (data) => {
    const newCategory = {
      name: data.name,
      image: data.image,
    };
    addCategory(newCategory);
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    resolver: yupResolver(CategoryFormSchema),
    mode: 'all',
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success('Add new Category success!');
      onClose();
      reset();
    }
  }, [isSuccess, onClose, reset]);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <CategoryForm
        title="Add Category"
        control={control}
        errors={errors}
        defaultValues={defaultValues}
        disabled={isLoading || !isValid}
        loading={isLoading}
        submitButtonText="Add category"
        onSubmit={handleSubmit(onSubmit)}
      />
    </Modal>
  );
};

export default AddCategoryModal;
