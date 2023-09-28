import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { user, token } from './authData';
import { categories } from './categoryData';
import { users } from './userData';

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

  rest.get(`${baseUrl}/categories`, async (req, res, ctx) => {
    return res(
      ctx.json(categories),
    );
  }),

  rest.post(`${baseUrl}/users`, async (req, res, ctx) => {
    const body = await req.json();

    return res(
      ctx.status(201),
      ctx.json({ ...body, id: 4 }),
    );
  }),

  rest.put(`${baseUrl}/users/:id`, async (req, res, ctx) => {
    const { id } = req.params;

    const user = users.find((user) => user.id === +id);

    if (!user) {
      return res(
        ctx.status(400),
        ctx.json({ message: 'User does not exist!' }),
      );
    }

    const body = await req.json();

    const updatedUser = {
      ...user,
      ...body,
    };

    return res(
      ctx.json(updatedUser),
    );
  }),

  rest.post(`${baseUrl}/users/is-available`, async (req, res, ctx) => {
    const body = await req.json();
    const { email } = body;

    const isAvailable = users.findIndex((user) => user.email === email) >= 0
      ? true
      : false;

    return res(
      ctx.json({ isAvailable }),
    );
  }),
)

export default server;
