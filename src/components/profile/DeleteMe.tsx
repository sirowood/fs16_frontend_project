import { useState } from 'react';

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import { useDeleteProfileMutation } from '../../redux/services/authApi';

const DeleteMe = () => {
  const [open, setOpen] = useState(false);
  const [deleteMe, { isLoading }] = useDeleteProfileMutation();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    deleteMe();
    handleClose();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Button
        variant="contained"
        color="error"
        onClick={handleOpen}
        disabled={isLoading}
      >
        Delete Me
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this item?
            <br />
            <br />
          </DialogContentText>
          <Typography
            color="red"
            variant="h6"
            textAlign="center"
          >
            This action is irreversible!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DeleteMe;
