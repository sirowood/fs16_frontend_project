import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';

import Modal from './Modal';
import CategoryForm from '../forms/CategoryForm';
import CategoryFormSchema from '../../schemas/categoryFormSchema';
import { useUpdateCategoryMutation } from '../../redux/services/categoryApi';
import useEditCategoryModal from '../../hooks/useEditCategoryModal';
import { CategoryFormValues, FullCategoryFormValues } from '../../types/form';

const EditCategoryModal = () => {
  const [updateCategory, { isLoading, isSuccess }] =
    useUpdateCategoryMutation();
  const { isOpen, onClose, defaultValues } = useEditCategoryModal();

  const onSubmit: SubmitHandler<CategoryFormValues> = (data) => {
    const { id, ...rest } = data as FullCategoryFormValues;
    const categoryNewData = {
      name: rest.name,
      image: rest.image,
    };
    updateCategory({ id, categoryNewData });
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({
    defaultValues,
    resolver: yupResolver(CategoryFormSchema),
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
      <CategoryForm
        title="Edit Category"
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

export default EditCategoryModal;
