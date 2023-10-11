import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { Toaster as ToasterProvider } from 'react-hot-toast';

import store from './redux/store';
import router from './router';
import UserProvider from './providers/UserProvider';
import ModalProvider from './providers/ModalProvider';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <UserProvider>
        <RouterProvider router={router} />
        <ModalProvider />
        <ToasterProvider
          toastOptions={{
            style: {
              background: '#333',
              color: '#fff',
            },
          }}
        />
      </UserProvider>
    </ReduxProvider>
  );
};

export default App;
