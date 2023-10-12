import { Navigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { useAppSelector } from '../redux/store';
import useAddProductModal from '../hooks/useAddProductModal';
import ProductsGrid from '../components/dashboard/ProductsGrid';

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
    <Box
      component="main"
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        transition: 'all .5s ease',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '24px',
      }}
    >
      <Button
        sx={{
          width: {
            xs: '100%',
            sm: 'max-content',
          },
        }}
        size="small"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={openAddProductModal}
      >
        Add product
      </Button>

      <ProductsGrid />
    </Box>
  );
};

export default Dashboard;
