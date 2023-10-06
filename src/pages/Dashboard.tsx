import { Navigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { useAppSelector } from '../redux/store';
import useAddProductModal from '../hooks/useAddProductModal';
import ProductsGrid from '../components/ProductsGrid';

const Dashboard = () => {
  const user = useAppSelector((state) => state.auth.user);
  const { onOpen } = useAddProductModal();

  const openAddProductModal = () => {
    onOpen();
  };

  if (!user || user.role !== 'admin') {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }
  return (
    <Box component="main">
      <Box>
        <Button
          fullWidth
          size="small"
          variant="contained"
          startIcon={<AddIcon />}
          onClick={openAddProductModal}
        >
          Add product
        </Button>
      </Box>

      <ProductsGrid />
    </Box>
  );
};

export default Dashboard;
