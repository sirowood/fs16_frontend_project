import { useState, useEffect } from 'react';

import ModalProvider from './Modal';
import useAuthModal from '../hooks/useAuthModal';
import { useLoginMutation } from '../redux/services/authApi';

const AuthModal = () => {
  const [login, { isSuccess }] = useLoginMutation();
  const { isOpen, closeAuthModal } = useAuthModal();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      closeAuthModal();
    }
  }, [isSuccess, closeAuthModal]);

  return (
    <ModalProvider
      open={isOpen}
      onClose={closeAuthModal}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </ModalProvider>
  );
};

export default AuthModal;
