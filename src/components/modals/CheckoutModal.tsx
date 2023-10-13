import { useEffect, useMemo, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';

import Modal from './Modal';
import useCart from '../../hooks/useCart';
import useCheckoutModal from '../../hooks/useCheckoutModal';
import getStripe from '../../libs/stripeClient';
import { getClientSecret } from '../../libs/stripe';
import CheckoutForm from '../forms/CheckoutForm';
import { useDarkMode } from '../../providers/ThemeProvider';
import { Appearance } from '@stripe/stripe-js';

const CheckOutModal = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const { isOpen, onClose } = useCheckoutModal();
  const { totalAmount } = useCart();
  const { darkMode } = useDarkMode();

  const appearance = useMemo<Appearance>(
    () => ({ theme: darkMode ? 'night' : 'stripe' }),
    [darkMode]
  );

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const secret = await getClientSecret(totalAmount);
        setClientSecret(secret);
      } catch (e) {
        console.log(e);
      }
    };

    if (isOpen) {
      fetchClientSecret();
    }
  }, [isOpen, totalAmount]);

  if (!clientSecret) {
    return null;
  }

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <Elements
        stripe={getStripe()}
        options={{ clientSecret, appearance }}
      >
        <CheckoutForm />
      </Elements>
    </Modal>
  );
};

export default CheckOutModal;
