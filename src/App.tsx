import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import store from './redux/store';
import router from './router';
import UserProvider from './providers/UserProvider';
import ModalProvider from './providers/ModalProvider';
import ToasterProvider from './providers/ToasterProvider';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <UserProvider>
        <RouterProvider router={router} />
        <ModalProvider />
        <ToasterProvider />
      </UserProvider>
    </ReduxProvider>
  );
};

export default App;
