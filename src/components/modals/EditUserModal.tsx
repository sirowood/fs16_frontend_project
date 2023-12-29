import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';

import Modal from './Modal';
import EditUserForm from '../forms/EditUserForm';
import { EditUserFormValues, FullUserFormValues } from '../../types/form';
import { useUpdateUserMutation } from '../../redux/services/userApi';
import editUserFormSchema from '../../schemas/editUserFormSchema';
import useEditUserModal from '../../hooks/useEditUserModal';

const EditUserModal = () => {
  const [updateUser, { isLoading, isSuccess }] = useUpdateUserMutation();
  const { isOpen, onClose, defaultValues } = useEditUserModal();

  const onSubmit: SubmitHandler<EditUserFormValues> = (data) => {
    const { id, ...rest } = data as FullUserFormValues;
    const userNewData = {
      firstName: rest.firstName,
      lastName: rest.lastName,
      email: rest.email,
      role: rest.role,
      avatar: rest.avatar,
    };
    updateUser({ id, userNewData });
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({
    defaultValues,
    resolver: yupResolver(editUserFormSchema),
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
      <EditUserForm
        title="Edit user"
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

export default EditUserModal;
