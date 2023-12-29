import { useEffect, useMemo } from 'react';
import toast from 'react-hot-toast';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Modal from './Modal';
import AddressFormSchema from '../../schemas/addressFormSchema';
import useAddAddressModal from '../../hooks/useAddAddressModal';
import { AddressFormValues } from '../../types/form';
import { useAddAddressMutation } from '../../redux/services/addressApi';
import AddressForm from '../forms/AddressForm';

const AddAddressModal = () => {
  const [addAddress, { isLoading, isSuccess }] = useAddAddressMutation();
  const { isOpen, onClose } = useAddAddressModal();
  const defaultValues = useMemo(
    () => ({
      street: '',
      postCode: '',
      city: '',
      country: '',
    }),
    []
  );

  const onSubmit: SubmitHandler<AddressFormValues> = (data) => {
    const newAddress = {
      street: data.street,
      postCode: data.postCode,
      city: data.city,
      country: data.country,
    };
    addAddress(newAddress);
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    resolver: yupResolver(AddressFormSchema),
    mode: 'all',
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success('Add new address success!');
      onClose();
      reset();
    }
  }, [isSuccess, onClose, reset]);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <AddressForm
        title="Add Address"
        control={control}
        errors={errors}
        defaultValues={defaultValues}
        disabled={isLoading || !isValid}
        loading={isLoading}
        submitButtonText="Add address"
        onSubmit={handleSubmit(onSubmit)}
      />
    </Modal>
  );
};

export default AddAddressModal;
