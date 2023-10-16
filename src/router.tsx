import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import SuccessPay from './pages/SuccessPay';

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
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'success',
        element: <SuccessPay />,
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
