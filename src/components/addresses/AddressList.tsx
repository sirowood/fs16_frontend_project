import { Grid } from '@mui/material';
import { Address } from '../../types/address';
import AddressCard from './AddressCard';
import { useRemoveAddressMutation } from '../../redux/services/addressApi';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import useEditAddressModal from '../../hooks/useEditAddressModal';

const AddressList = ({ addresses }: { addresses: Address[] }) => {
  const [removeAddress, { isLoading, isSuccess }] = useRemoveAddressMutation();

  const { onOpen, setDefaultValues } = useEditAddressModal();

  const onRemove = (addressId: string) => {
    removeAddress(addressId);
  };

  const openEditUserModal = (address: Address) => {
    const addressValues = {
      id: address.id,
      street: address.street,
      postCode: address.postCode,
      city: address.city,
      country: address.country,
    };
    setDefaultValues(addressValues);
    onOpen();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Address remove success.');
    }
  }, [isSuccess]);

  return (
    <Grid
      container
      spacing={3}
      marginTop="4px"
    >
      {addresses.map((address) => (
        <AddressCard
          key={address.id}
          address={address}
          onRemove={onRemove}
          isLoading={isLoading}
          openEditUserModal={openEditUserModal}
        />
      ))}
    </Grid>
  );
};

export default AddressList;
