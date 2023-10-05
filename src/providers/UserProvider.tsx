import React from 'react';

import { useGetUserQuery } from '../redux/services/authApi';
import { LoginRes } from '../types/auth';

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const localToken = localStorage.getItem('token');
  const token: LoginRes = JSON.parse(localToken || '{}');

  useGetUserQuery(token.access_token, { skip: !token.access_token });

  return <>{children}</>;
};

export default UserProvider;
