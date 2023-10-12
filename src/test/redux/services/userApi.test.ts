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
  test('should register user successfully', async () => {
    const newUser = {
      name: 'test name',
      password: 'test password',
      email: 'test@mail.com',
      avatar: 'http://test.avatar.com/avatar.jpg',
      role: 'customer',
    };

    const result: any = await store.dispatch(userApi.endpoints.register.initiate(newUser));

    expect(result.data).toEqual({ ...newUser, id: 4 });
  });

  test('should update user successfully', async () => {
    const result: any = await store.dispatch(
      userApi.endpoints.updateUser.initiate({
        id: 3,
        userNewData: { name: 'updated name' },
      })
    );

    expect(result.data).toEqual({ ...(users[2]), name: 'updated name' });
  });

  test('should check valid email successfully', async () => {
    const result: any = await store.dispatch(
      userApi.endpoints.checkEmail.initiate('john@mail.com')
    );

    expect(result.data).toEqual({ isAvailable: false });
  });

  test('should check invalid email successfully', async () => {
    const result: any = await store.dispatch(
      userApi.endpoints.checkEmail.initiate('invalid@mail.com')
    );

    expect(result.data).toEqual({ isAvailable: true });
  });
});
