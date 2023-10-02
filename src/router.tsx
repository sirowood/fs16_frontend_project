import { RouteObject, createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Error from './components/Error';
import Home from './pages/Home';
import Product from './pages/Product';
import Profile from './pages/Profile';
import ShoppingCart from './pages/ShoppingCart';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
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
        element: <ShoppingCart />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
