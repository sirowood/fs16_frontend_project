import store from '../../../redux/store';
import userApi from '../../../redux/services/userApi';
import server from '../../shared/server';
import { users } from '../../shared/userData';

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  server.resetHandlers();
});

describe('userApi', () => {
  test('should update user successfully', async () => {
    const result: any = await store.dispatch(
      userApi.endpoints.updateUser.initiate({
        id: '3',
        userNewData: { firstName: 'updated firstName' },
      })
    );

    expect(result.data).toEqual({ ...(users[2]), firstName: 'updated firstName' });
  });
});
