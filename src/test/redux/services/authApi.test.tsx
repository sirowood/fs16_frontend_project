import { act } from 'react-dom/test-utils';
import { waitFor } from '@testing-library/react';

import {
  useLazyGetUserQuery,
  useLoginMutation,
} from '../../../redux/services/authApi';
import server from '../../shared/server';
import getResult from '../../shared/testProvider';
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
    const result = getResult(useLoginMutation);

    act(() => {
      result.current[0](user);
    });

    await waitFor(() => {
      expect(result.current[1].isSuccess).toBe(true);
    });

    expect(result.current[1].data).toEqual(token);
  });

  test('should handle get tokens error', async () => {
    const result = getResult(useLoginMutation);

    act(() => {
      result.current[0]({ ...user, password: 'wrongpass' });
    });

    await waitFor(() => {
      expect(result.current[1].isError).toBe(true);
    });

    expect(result.current[1].error).toEqual({
      message: 'Invalid username or password',
    });
  });

  test('should get user profile successfully', async () => {
    const result = getResult(useLazyGetUserQuery);

    act(() => {
      result.current[0](token.access_token);
    });

    await waitFor(() => {
      expect(result.current[1].isSuccess).toBe(true);
    });

    expect(result.current[1].data).toEqual(user);
  });

  test('should handle get user profile error', async () => {
    const result = getResult(useLazyGetUserQuery);

    act(() => {
      result.current[0]('wrong token');
    });

    await waitFor(() => {
      expect(result.current[1].isError).toBe(true);
    });

    expect(result.current[1].error).toEqual({ message: 'Invalid token' });
  });
});
