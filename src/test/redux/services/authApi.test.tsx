import store from '../../../redux/store';
import authApi from '../../../redux/services/authApi';
import server from '../../shared/server';
import { user, token } from '../../shared/authData';

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  server.resetHandlers();
});

describe('authApi', () => {
  test('should get tokens successfully', async () => {
    const result: any = await store.dispatch(
      authApi.endpoints.login.initiate(user)
    );

    expect(result.data).toEqual(token);
  });

  test('should handle get tokens error', async () => {
    // Providing invalid password
    const result: any = await store.dispatch(
      authApi.endpoints.login.initiate({ ...user, password: 'wrongpass' })
    );

    expect(result.error).toEqual({ message: 'Invalid username or password' });
  });

  test('should get user profile successfully', async () => {
    const { data } = await store.dispatch(
      authApi.endpoints.getUser.initiate(token.access_token)
    );

    expect(data).toEqual(user);
  });

  test('should handle get user profile error', async () => {
    const { error } = await store.dispatch(
      authApi.endpoints.getUser.initiate('wrong token')
    );

    expect(error).toEqual({ message: 'Invalid token' });
  });
});
