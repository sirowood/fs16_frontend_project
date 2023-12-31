import store from '../../../redux/store';
import categoryApi from '../../../redux/services/categoryApi';
import server from '../../shared/server';
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
    const { data } = await store.dispatch(
      categoryApi.endpoints.getCategories.initiate({ limit: 20, offset: 0 })
    );

    expect(data?.items).toEqual(categories);
  });
});
