import { Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import Main from '../../components/Main';
import { useAppSelector } from '../../redux/store';
import useAddProductModal from '../../hooks/useAddProductModal';
import ProductsGrid from '../../components/admin/ProductsGrid';
import { addButton } from '../../styles/dashboard';

const AdminProducts = () => {
  const user = useAppSelector((state) => state.auth.user);
  const { onOpen } = useAddProductModal();

  const openAddProductModal = () => {
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
        onClick={openAddProductModal}
      >
        Add product
      </Button>

      <ProductsGrid />
    </Main>
  );
};

export default AdminProducts;
