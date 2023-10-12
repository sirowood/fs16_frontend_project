import { useMemo, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Modal from './Modal';
import RegisterForm from '../forms/RegisterForm';
import registerFormSchema from '../../schemas/registerFormSchema';
import { useRegisterMutation } from '../../redux/services/userApi';
import useRegisterModal from '../../hooks/useRegisterModal';
import { RegisterFormValues } from '../../types/form';

const RegisterModal = () => {
  const { isOpen, onClose } = useRegisterModal();
  const [register, { isLoading, isSuccess }] = useRegisterMutation();

  const defaultValues = useMemo(
    () => ({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'customer',
      avatar: '',
    }),
    []
  );

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    register(data);
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    resolver: yupResolver(registerFormSchema),
    mode: 'all',
  });

  useEffect(() => {
    if (isSuccess) {
      onClose();
      reset();
    }
  }, [onClose, reset, isSuccess]);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <RegisterForm
        title="Register"
        control={control}
        errors={errors}
        disabled={isLoading || !isValid}
        loading={isLoading}
        submitButtonText="Register"
        onSubmit={handleSubmit(onSubmit)}
      />
    </Modal>
  );
};

export default RegisterModal;
