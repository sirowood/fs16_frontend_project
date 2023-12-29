import { useEffect, useMemo } from 'react';
import toast from 'react-hot-toast';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Modal from './Modal';
import UserFormSchema from '../../schemas/addUserFormSchema';
import { AddUserFormValues } from '../../types/form';
import useAddUserModal from '../../hooks/useAddUserModal';
import { useAddUserMutation } from '../../redux/services/userApi';
import UserForm from '../forms/AddUserForm';

const AddUserModal = () => {
  const [addUser, { isLoading, isSuccess }] = useAddUserMutation();
  const { isOpen, onClose } = useAddUserModal();
  const defaultValues = useMemo(
    () => ({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'Customer',
      avatar: 'https://picsum.photos/200',
    }),
    []
  );

  const onSubmit: SubmitHandler<AddUserFormValues> = (data) => {
    const newUser = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      role: data.role,
      avatar: data.avatar,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    addUser(newUser);
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    resolver: yupResolver(UserFormSchema),
    mode: 'all',
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success('Add new user success!');
      onClose();
      reset();
    }
  }, [isSuccess, onClose, reset]);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <UserForm
        title="Add User"
        control={control}
        errors={errors}
        defaultValues={defaultValues}
        disabled={isLoading || !isValid}
        loading={isLoading}
        submitButtonText="Add user"
        onSubmit={handleSubmit(onSubmit)}
      />
    </Modal>
  );
};

export default AddUserModal;
