import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';

import Modal from './Modal';

import AddressFormSchema from '../../schemas/addressFormSchema';
import { AddressFormValues } from '../../types/form';
import AddressForm from '../forms/AddressForm';
import { Address } from '../../types/address';
import { useUpdateAddressMutation } from '../../redux/services/addressApi';
import useEditAddressModal from '../../hooks/useEditAddressModal';

const EditAddressModal = () => {
  const [updateAddress, { isLoading, isSuccess }] = useUpdateAddressMutation();
  const { isOpen, onClose, defaultValues } = useEditAddressModal();

  const onSubmit: SubmitHandler<AddressFormValues> = (data) => {
    const { id, ...rest } = data as Address;
    const addressNewData = {
      street: rest.street,
      postCode: rest.postCode,
      city: rest.city,
      country: rest.country,
    };
    updateAddress({ id, addressNewData });
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({
    defaultValues,
    resolver: yupResolver(AddressFormSchema),
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
      <AddressForm
        title="Edit Address"
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

export default EditAddressModal;
