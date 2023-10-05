import { useState } from 'react';

import ModalProvider from './Modal';
import useRegisterModal from '../hooks/useRegisterModal';
import { useRegisterMutation } from '../redux/services/userApi';

const RegisterModal = () => {
  const { isOpen, closeRegisterModal } = useRegisterModal();
  const [register] = useRegisterMutation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register({ name, email, password, role: 'customer', avatar });
  };

  return (
    <ModalProvider
      open={isOpen}
      onClose={closeRegisterModal}
    >
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>

        <label>
          Avatar link
          <input
            type="text"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </ModalProvider>
  );
};

export default RegisterModal;
