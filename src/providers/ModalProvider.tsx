import AddProductModal from '../components/AddProductModal';
import EditProductModal from '../components/EditProductModal ';
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';

const ModalProvider = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <AddProductModal />
      <EditProductModal />
    </>
  );
};

export default ModalProvider;
