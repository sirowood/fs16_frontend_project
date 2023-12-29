import { Grid, IconButton, Paper, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { Address } from '../../types/address';

const AddressCard = ({
  address,
  onRemove,
  isLoading,
  openEditUserModal,
}: {
  address: Address;
  onRemove: (addressId: string) => void;
  isLoading: boolean;
  openEditUserModal: (address: Address) => void;
}) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
    >
      <Paper
        elevation={3}
        style={{ padding: '16px', marginBottom: '16px' }}
      >
        <Typography variant="h6">{address.street}</Typography>
        <Typography>{address.postCode}</Typography>
        <Typography>{address.city}</Typography>
        <Typography>{address.country}</Typography>
        <div style={{ marginTop: '8px', textAlign: 'right' }}>
          <IconButton
            color="primary"
            onClick={() => openEditUserModal(address)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            onClick={() => onRemove(address.id)}
            disabled={isLoading}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </Paper>
    </Grid>
  );
};

export default AddressCard;
