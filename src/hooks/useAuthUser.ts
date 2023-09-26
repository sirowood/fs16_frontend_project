import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

import { useAppDispatch } from '../redux/store';
import authApi, {
  useLoginMutation,
  useLazyGetUserQuery,
} from '../redux/services/authApi';

const useAuthUser = () => {
  const dispatch = useAppDispatch();
  const [login, { data: loginData, isLoading: loginLoading }] = useLoginMutation();
  const [getUser, { data: user, isLoading: getUserLoading }] = useLazyGetUserQuery();

  const handleLogin = ({ email, password }: LoginReq) => {
    login({ email, password });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(authApi.util.resetApiState());
  };

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    if (localToken && !loginData) {
      const token: LoginRes = JSON.parse(localToken);
      getUser(token.access_token);
    } else if (!localToken && loginData) {
      localStorage.setItem('token', JSON.stringify(loginData));
      getUser(loginData.access_token);
    }
  }, [getUser, loginData]);

  useEffect(() => {
    if (user) {
      toast.success(`Welcome back, ${user.name}`);
    }
  }, [user]);

  return {
    user,
    isLoading: loginLoading || getUserLoading,
    handleLogin,
    handleLogout,
  };
};

export default useAuthUser;