import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { user, token } from './authData';

const baseUrl = 'https://api.escuelajs.co/api/v1';

const server = setupServer(
  rest.post(`${baseUrl}/auth/login`, async (req, res, ctx) => {
    const body = await req.json();

    if (body && user.email === body.email && user.password === body.password) {
      return res(
        ctx.json(token),
      );
    }

    return res(
      ctx.status(401),
      ctx.json({ statusCode: 401, message: 'Unauthorized' }),
    );
  }),

  rest.get(`${baseUrl}/auth/profile`, async (req, res, ctx) => {
    const authorizationHeader = req.headers.get('Authorization');

    if (authorizationHeader && authorizationHeader === `Bearer ${token.access_token}`) {
      return res(
        ctx.json(user),
      );
    }

    return res(
      ctx.status(401),
      ctx.json({ statusCode: 401, message: 'Unauthorized' }),
    );
  }),
)

export default server;
