import { useEffect, useMemo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Modal from './Modal';
import LoginForm from '../forms/LoginForm';
import loginFormSchema from '../../schemas/loginFormSchema';
import { useLoginMutation } from '../../redux/services/authApi';
import useAuthModal from '../../hooks/useLoginModal';
import { LoginFormValues } from '../../types/form';

const LoginModal = () => {
  const [login, { isSuccess, isLoading }] = useLoginMutation();
  const { isOpen, onClose } = useAuthModal();
  const defaultValues = useMemo(
    () => ({
      email: '',
      password: '',
    }),
    []
  );

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    login(data);
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    resolver: yupResolver(loginFormSchema),
    mode: 'all',
  });

  useEffect(() => {
    if (isSuccess) {
      onClose();
      reset();
    }
  }, [isSuccess, onClose, reset]);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <LoginForm
        title="Login"
        control={control}
        errors={errors}
        disabled={isLoading || !isValid}
        loading={isLoading}
        submitButtonText="Login"
        onSubmit={handleSubmit(onSubmit)}
      />
    </Modal>
  );
};

export default LoginModal;
