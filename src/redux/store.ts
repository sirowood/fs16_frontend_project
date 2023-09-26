import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { Middleware, configureStore, isRejectedWithValue } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { toast } from 'react-hot-toast';

import cartReducer from "./reducers/cartReducer";
import api from "./services/api";
import authApi from './services/authApi';

const rtkQueryErrorMiddleware: Middleware =
  () => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      toast.error(action.payload.message);
    }

    return next(action);
  };

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(api.middleware)
    .concat(authApi.middleware)
    .concat(rtkQueryErrorMiddleware),
});

setupListeners(store.dispatch);

type AppState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export {
  useAppDispatch,
  useAppSelector,
};

export default store;
