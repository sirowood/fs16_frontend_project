import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { renderHook } from '@testing-library/react';

import store from '../../redux/store';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}> {children} </Provider>;
};

const getResult = (hookFunc) => {
  const { result } = renderHook(() => hookFunc(), {
    wrapper: Wrapper,
  });

  return result;
};

export default getResult;
