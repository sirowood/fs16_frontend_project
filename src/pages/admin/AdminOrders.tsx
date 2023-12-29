import { Navigate } from 'react-router-dom';

import Main from '../../components/Main';
import { useAppSelector } from '../../redux/store';
import OrdersGrid from '../../components/admin/OrdersGrid';

const AdminOrders = () => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user || user.role !== 'Admin') {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return (
    <Main>
      <OrdersGrid />
    </Main>
  );
};

export default AdminOrders;
