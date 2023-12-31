import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { user, token } from './authData';
import { categories } from './categoryData';
import { users } from './userData';
import { products } from './productData';

const baseUrl = 'https://localhost:7060/api/v1';

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

    if (authorizationHeader && authorizationHeader === `Bearer ${token.token}`) {
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
      ctx.json({
        items: categories,
        total: categories.length,
        pages: 1
      }),
    );
  }),

  rest.post(`${baseUrl}/auth/register`, async (req, res, ctx) => {
    const body = await req.json();

    return res(
      ctx.status(201),
      ctx.json({ ...body, id: 4 }),
    );
  }),

  rest.patch(`${baseUrl}/users/:id`, async (req, res, ctx) => {
    const { id } = req.params;

    const user = users.find((user) => user.id === id);

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

  rest.get(`${baseUrl}/users`, async (req, res, ctx) => {
    return res(
      ctx.json(users),
    );
  }),

  rest.get(`${baseUrl}/products`, async (req, res, ctx) => {
    const categoryId = req.url.searchParams.get('categoryId');
    const offset = req.url.searchParams.get('offset');
    const limit = req.url.searchParams.get('limit');
    const title = req.url.searchParams.get('title');

    let resData = [...products];

    if (categoryId && +categoryId) {
      resData = resData.filter((product) => product.category.id === categoryId);
    }

    if (title) {
      resData = resData.filter((product) => product.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
    }

    if (limit && +limit) {
      if (offset && +offset) {
        resData = resData.slice(+limit * +offset, +limit * +offset + +limit);
      } else {
        resData = resData.slice(0, +limit);
      }
    }

    return res(
      ctx.json({ items: resData, total: resData.length, pages: 10 }),
    );
  }),

  rest.get(`${baseUrl}/products/:id`, async (req, res, ctx) => {
    const { id: productId } = req.params;

    const product = products.find((item) => item.id === productId);
    if (!product) {
      return res(
        ctx.status(400),
        ctx.json({ message: 'EntityNotFoundError' }),
      );
    }

    return res(
      ctx.json(product),
    );
  }),

  rest.post(`${baseUrl}/products`, async (req, res, ctx) => {
    const newProduct = await req.json();

    if (!newProduct) {
      return res(
        ctx.status(400),
        ctx.json({ message: 'Missing product information' }),
      );
    }

    const category = categories.find((category) => category.id === newProduct.categoryId);

    if (!category) {
      return res(
        ctx.status(400),
        ctx.json({ message: 'No such category' }),
      );
    }

    delete newProduct.categoryId;

    return res(
      ctx.json({
        id: products.length + 1,
        ...newProduct,
        category,
        createdAt: "2023-01-03T16:51:33.000Z",
        updatedAt: "2023-01-03T16:51:33.000Z",
      }),
    );
  }),

  rest.patch(`${baseUrl}/products/:id`, async (req, res, ctx) => {
    const { id } = req.params;
    const productNewData = await req.json();

    const product = products.find((product) => product.id === id);

    if (!product) {
      return res(
        ctx.status(400),
        ctx.json({ message: 'No such product' }),
      );
    }

    const productNewCategoryId = productNewData.categoryId;
    const productNewCategory = categories.find((category) => category.id === productNewCategoryId);
    if (productNewCategoryId && !productNewCategory) {
      return res(
        ctx.status(400),
        ctx.json({ message: 'No such category' }),
      );
    }

    delete productNewData.categoryId;

    const updatedProduct = {
      ...product,
      ...productNewData,
      category: productNewCategory ? productNewCategory : product.category,
    };

    return res(
      ctx.json(updatedProduct),
    );
  }),

  rest.delete(`${baseUrl}/products/:id`, async (req, res, ctx) => {
    const { id } = req.params;

    const product = products.find((product) => product.id === id);

    if (!product) {
      return res(
        ctx.status(400),
        ctx.json(false),
      );
    }

    return res(
      ctx.json(true),
    );
  }),
);

export default server;
