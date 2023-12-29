import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import useCart from '../../hooks/useCart';
import { checkoutButton, summaryDetailsBox } from '../../styles/cart';
import { useAddOrderMutation } from '../../redux/services/orderApi';
import { useAppSelector } from '../../redux/store';
import useAddAddressModal from '../../hooks/useAddAddressModal';
import { addButton } from '../../styles/dashboard';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Summary = () => {
  const navigate = useNavigate();
  const { cart, totalAmount, emptyCart } = useCart();
  const addresses = useAppSelector((state) => state.auth.user?.addresses);
  const [addOrder, { data, isLoading, isSuccess }] = useAddOrderMutation();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const { onOpen } = useAddAddressModal();

  const openAddAddressModal = () => {
    onOpen();
  };

  useEffect(() => {
    if (isSuccess) {
      setOpenDialog(false);
      toast.success('Order confiremed!');
      navigate(`/orders/${data?.id}`);
      emptyCart();
    }
  }, [data?.id, emptyCart, isSuccess, navigate]);

  if (!cart.length) {
    return null;
  }

  const handleConfirmOrder = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handlePlaceOrder = () => {
    addOrder({
      addressId: selectedAddress!,
      orderDetails: cart.map((item) => ({
        productId: item.id,
        ...item,
      })),
    });
  };

  return (
    <>
      <Grid
        item
        xs={12}
        md={5}
        marginTop="20px"
      >
        <Typography
          variant="h6"
          paddingBottom="16px"
        >
          Order summary
        </Typography>
        <Box sx={summaryDetailsBox}>
          <Typography>Order total</Typography>
          <Typography fontWeight="bold">€ {totalAmount}</Typography>
        </Box>
        <LoadingButton
          loading={isLoading}
          variant="contained"
          fullWidth
          sx={checkoutButton}
          onClick={handleConfirmOrder}
        >
          Confirm Order
        </LoadingButton>
      </Grid>

      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
      >
        <DialogTitle>Select Address</DialogTitle>
        <DialogContent>
          <Button
            sx={addButton}
            size="small"
            variant="contained"
            startIcon={<AddIcon />}
            fullWidth
            onClick={openAddAddressModal}
          >
            Add Address
          </Button>
          {addresses?.map((address) => (
            <Paper
              elevation={3}
              key={address.id}
              style={{
                padding: '8px',
                marginTop: '8px',
                marginBottom: '8px',
                cursor: 'pointer',
                border:
                  address.id === selectedAddress
                    ? '2px solid black'
                    : '1px solid transparent',
              }}
              onClick={() => setSelectedAddress(address.id)}
            >
              {address.street}, {address.city}, {address.country}
            </Paper>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button
            onClick={handlePlaceOrder}
            disabled={!selectedAddress || isLoading}
          >
            Place Order
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Summary;
