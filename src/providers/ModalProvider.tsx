import AddAddressModal from '../components/modals/AddAddressModal';
import AddCategoryModal from '../components/modals/AddCategoryModal';
import AddProductModal from '../components/modals/AddProductModal';
import AddUserModal from '../components/modals/AddUserModal';
import EditAddressModal from '../components/modals/EditAddressModal';
import EditCategoryModal from '../components/modals/EditCategoryModal';
import EditProductModal from '../components/modals/EditProductModal';
import EditUserModal from '../components/modals/EditUserModal';

const ModalProvider = () => {
  return (
    <>
      <AddProductModal />
      <EditProductModal />
      <AddCategoryModal />
      <EditCategoryModal />
      <AddUserModal />
      <EditUserModal />
      <AddAddressModal />
      <EditAddressModal />
    </>
  );
};

export default ModalProvider;
