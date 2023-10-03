import React from 'react';
import { useGetUserQuery } from '../redux/services/authApi';

const UserProvider = ({ children }: { children: React.ReactElement }) => {
  const localToken = localStorage.getItem('token');
  const token: LoginRes = JSON.parse(localToken || '{}');

  useGetUserQuery(token.access_token, { skip: !token.access_token });

  return children;
};

export default UserProvider;
