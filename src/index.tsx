import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import App from './App';
import store from './redux/store';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
      <App />
    </Provider>
  </React.StrictMode>
);
