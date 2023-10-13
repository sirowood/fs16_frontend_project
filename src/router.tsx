import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';

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
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
