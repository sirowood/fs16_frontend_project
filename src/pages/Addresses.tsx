import { Navigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button } from '@mui/material';

import { useAppSelector } from '../redux/store';
import Main from '../components/Main';
import AddressList from '../components/addresses/AddressList';
import { addButton } from '../styles/product';
import useAddAddressModal from '../hooks/useAddAddressModal';

const Addresses = () => {
  const user = useAppSelector((state) => state.auth.user);
  const { onOpen } = useAddAddressModal();

  const openAddAddressModal = () => {
    onOpen();
  };

  if (!user || user.role !== 'Customer') {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return (
    <Main>
      {user.addresses.length < 5 && (
        <Button
          sx={addButton}
          size="small"
          variant="contained"
          startIcon={<AddIcon />}
          onClick={openAddAddressModal}
        >
          Add Address
        </Button>
      )}

      <Box component="section">
        <AddressList addresses={user.addresses} />
      </Box>
    </Main>
  );
};

export default Addresses;
