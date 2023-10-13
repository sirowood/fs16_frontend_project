import AddProductModal from '../components/modals/AddProductModal';
import CheckOutModal from '../components/modals/CheckoutModal';
import EditProductModal from '../components/modals/EditProductModal ';
import LoginModal from '../components/modals/LoginModal';
import RegisterModal from '../components/modals/RegisterModal';

const ModalProvider = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <AddProductModal />
      <EditProductModal />
      <CheckOutModal />
    </>
  );
};

export default ModalProvider;
