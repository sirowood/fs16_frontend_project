import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { renderHook, waitFor } from '@testing-library/react';

import store from '../../../redux/store';
import { useGetCategoriesQuery } from '../../../redux/services/categoryApi';
import server from '../../shared/server';
import { categories } from '../../shared/categoryData';

function Wrapper({ children }: { children: ReactNode }) {
  return <Provider store={store}> {children} </Provider>;
}

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  server.resetHandlers();
});

describe('categoryApi', () => {
  test('should return categories successfully', async () => {
    const { result } = renderHook(() => useGetCategoriesQuery(), {
      wrapper: Wrapper,
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data).toEqual(categories);
  });
});
