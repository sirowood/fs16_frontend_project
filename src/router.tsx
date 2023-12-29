import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminProducts from './pages/admin/AdminProducts';
import AdminCategories from './pages/admin/AdminCategories';
import AdminUsers from './pages/admin/AdminUsers';
import Addresses from './pages/Addresses';
import UserOrders from './pages/UserOrders';
import Order from './pages/Order';
import AdminOrders from './pages/admin/AdminOrders';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'category/:id',
        element: <Products />,
      },
      {
        path: 'products/:id',
        element: <Product />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'admin/categories',
        element: <AdminCategories />,
      },
      {
        path: 'admin/products',
        element: <AdminProducts />,
      },
      {
        path: 'admin/users',
        element: <AdminUsers />,
      },
      {
        path: 'admin/orders',
        element: <AdminOrders />,
      },
      {
        path: 'addresses',
        element: <Addresses />,
      },
      {
        path: 'orders',
        element: <UserOrders />,
      },
      {
        path: 'orders/:id',
        element: <Order />,
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
