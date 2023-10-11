import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import store from './redux/store';
import router from './router';
import ThemeProvider from './providers/ThemeProvider';
import UserProvider from './providers/UserProvider';
import ModalProvider from './providers/ModalProvider';
import ToasterProvider from './providers/ToasterProvider';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <UserProvider>
          <RouterProvider router={router} />
          <ModalProvider />
          <ToasterProvider />
        </UserProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
