import { RouterProvider } from 'react-router-dom';

import router from './router';
import UserProvider from './providers/UserProvider';
import ModalProvider from './providers/ModalProvider';

const App = () => {
  return (
    <UserProvider>
      <RouterProvider router={router} />
      <ModalProvider />
    </UserProvider>
  );
};

export default App;
