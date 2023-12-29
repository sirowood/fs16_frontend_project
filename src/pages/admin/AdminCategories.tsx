import { Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import Main from '../../components/Main';
import { useAppSelector } from '../../redux/store';
import useAddCategoryModal from '../../hooks/useAddCategoryModal';
import { addButton } from '../../styles/dashboard';
import CategoriesGrid from '../../components/admin/CategoriesGrid';

const AdminCategories = () => {
  const user = useAppSelector((state) => state.auth.user);
  const { onOpen } = useAddCategoryModal();

  const openAddCategoryModal = () => {
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
        onClick={openAddCategoryModal}
      >
        Add Category
      </Button>

      <CategoriesGrid />
    </Main>
  );
};

export default AdminCategories;
