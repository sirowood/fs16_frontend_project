import { Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import Main from '../../components/Main';
import { useAppSelector } from '../../redux/store';
import useAddUserModal from '../../hooks/useAddUserModal';
import { addButton } from '../../styles/dashboard';
import UsersGrid from '../../components/admin/UsersGrid';

const AdminUsers = () => {
  const user = useAppSelector((state) => state.auth.user);
  const { onOpen } = useAddUserModal();

  const openAddUserModal = () => {
    onOpen();
  };

  if (!user || user.role !== 'Admin') {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return (
    <Main>
      <Button
        sx={addButton}
        size="small"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={openAddUserModal}
      >
        Add user
      </Button>

      <UsersGrid />
    </Main>
  );
};

export default AdminUsers;
