import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { renderHook } from '@testing-library/react';

import store from '../../redux/store';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}> {children} </Provider>;
};

const getResult = (hookFunc: Function) => (arg?: any) =>
  renderHook(() => (arg ? hookFunc(arg) : hookFunc()), {
    wrapper: Wrapper,
  }).result;

export default getResult;
