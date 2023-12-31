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

    expect(result.error).not.toBeNull();
  });

  test('should get user profile successfully', async () => {
    const { data } = await store.dispatch(
      authApi.endpoints.getProfile.initiate(token.token)
    );

    expect(data).toEqual(user);
  });

  test('should handle get user profile error', async () => {
    const { error } = await store.dispatch(
      authApi.endpoints.getProfile.initiate('wrong token')
    );

    expect(error).not.toBeNull();
  });

  test('should register user successfully', async () => {
    const newUser = {
      firstName: 'test name',
      lastName: '',
      password: 'test password',
      email: 'test@mail.com',
      avatar: 'http://test.avatar.com/avatar.jpg',
      role: 'Customer',
    };

    const result: any = await store.dispatch(
      authApi.endpoints.register.initiate(newUser)
    );

    expect(result.data).toEqual({ ...newUser, id: 4 });
  });
});
