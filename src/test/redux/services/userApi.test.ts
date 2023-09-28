import { act } from 'react-dom/test-utils';
import { waitFor } from '@testing-library/react';

import {
  useRegisterMutation,
  useUpdateUserMutation,
  useCheckEmailMutation,
} from '../../../redux/services/userApi';
import server from '../../shared/server';
import getResult from '../../shared/testProvider';
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
    const result = getResult(useRegisterMutation)();

    const newUser = {
      name: 'test name',
      password: 'test password',
      email: 'test@mail.com',
      avatar: 'http://test.avatar.com/avatar.jpg',
    };

    act(() => {
      result.current[0](newUser);
    });

    await waitFor(() => {
      expect(result.current[1].isSuccess).toBe(true);
    });

    expect(result.current[1].data).toEqual({ ...newUser, id: 4 });
  });

  test('should update user successfully', async () => {
    const result = getResult(useUpdateUserMutation)();

    act(() => {
      result.current[0]({
        id: 3,
        userNewData: { name: 'updated name' },
      });
    });

    await waitFor(() => {
      expect(result.current[1].isSuccess).toBe(true);
    });

    expect(result.current[1].data).toEqual({ ...(users[2]), name: 'updated name' });
  });

  test('should check valid email successfully', async () => {
    const result = getResult(useCheckEmailMutation)();

    act(() => {
      result.current[0]({ email: 'john@mail.com' });
    });

    await waitFor(() => {
      expect(result.current[1].isSuccess).toBe(true);
    });

    expect(result.current[1].data).toEqual({
      isAvailable: true,
    });
  });

  test('should check invalid email successfully', async () => {
    const result = getResult(useCheckEmailMutation)();

    act(() => {
      result.current[0]({ email: 'invalid@mail.com' });
    });

    await waitFor(() => {
      expect(result.current[1].isSuccess).toBe(true);
    });

    expect(result.current[1].data).toEqual({
      isAvailable: false,
    });
  });
});
