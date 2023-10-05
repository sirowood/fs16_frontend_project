import AuthModal from '../components/AuthModal';
import RegisterModal from '../components/RegisterModal';

const ModalProvider = () => {
  return (
    <>
      <AuthModal />
      <RegisterModal />
    </>
  );
};

export default ModalProvider;
