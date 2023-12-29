import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

import { useLazyGetProfileQuery } from '../redux/services/authApi';

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [getUserProfile, { isUninitialized, isSuccess, isError }] =
    useLazyGetProfileQuery();
  const token = localStorage.getItem('token') || '';

  if (token && isUninitialized) {
    getUserProfile(token);
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success('Welcome back!');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      localStorage.removeItem('token');
    }
  }, [isError]);

  return <>{children}</>;
};

export default UserProvider;
