import { waitFor } from '@testing-library/react';

import { useGetCategoriesQuery } from '../../../redux/services/categoryApi';
import server from '../../shared/server';
import getResult from '../../shared/testProvider';
import { categories } from '../../shared/categoryData';

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
    const result = getResult(useGetCategoriesQuery);

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data).toEqual(categories);
  });
});
