import { act } from 'react-dom/test-utils';
import { waitFor } from '@testing-library/react';

import {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useRemoveProductMutation,
} from '../../../redux/services/productApi';
import server from '../../shared/server';
import getResult from '../../shared/testProvider';
import { products } from '../../shared/productData';
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

const filters = { categoryId: 0, limit: 0, offset: 0, title: '' };

describe('productApi', () => {
  test('should get all products successfully', async () => {
    const result = getResult(useGetProductsQuery)(filters);

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data).toEqual(products);
  });

  test('should get products with category filter correctly', async () => {
    const categoryId = 4;
    const result = getResult(useGetProductsQuery)({ ...filters, categoryId });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data).toEqual(products.filter((product) => product.category.id === categoryId));
  });

  test('should get products with title filter correctly', async () => {
    const title = 'Nuevo Titulo';
    const result = getResult(useGetProductsQuery)({ ...filters, title });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data).toEqual(products.filter((product) => product.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())));
  });

  test('should get products with limit and offset filter correctly', async () => {
    const limit = 1;
    const offset = 2;
    const result = getResult(useGetProductsQuery)({ ...filters, limit, offset });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data).toEqual(products.slice(limit * offset, limit * offset + limit));
  });

  test('should get products with all filters correctly', async () => {
    const categoryId = 4;
    const title = 'Nuevo Titulo';
    const limit = 1;
    const offset = 2;
    const result = getResult(useGetProductsQuery)({ categoryId, title, limit, offset });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    const expectedData = products
      .filter((product) => product.category.id === categoryId)
      .filter((product) => product.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()))
      .slice(limit * offset, limit * offset + limit);

    expect(result.current.data).toEqual(expectedData);
  });

  test('should get valid single product successfully', async () => {
    const result = getResult(useGetSingleProductQuery)(2);

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data).toEqual(products.find((product) => product.id === 2));
  });

  test('should handle get single product error', async () => {
    const result = getResult(useGetSingleProductQuery)(100);

    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });

    expect(result.current.error).toEqual({ message: 'No such product' });
  });

  test('should add new product successfully', async () => {
    const newProduct = {
      title: "New Product",
      price: 10,
      description: "A description",
      categoryId: 1,
      images: ["https://placeimg.com/640/480/any"],
    };
    const result = getResult(useAddProductMutation)();

    act(() => {
      result.current[0](newProduct);
    });

    await waitFor(() => {
      expect(result.current[1].isSuccess).toBe(true);
    });

    expect(result.current[1].data).toEqual({
      id: products.length + 1,
      title: newProduct.title,
      price: newProduct.price,
      description: newProduct.description,
      images: newProduct.images,
      category: categories.find((category) => category.id === newProduct.categoryId),
      creationAt: "2023-01-03T16:51:33.000Z",
      updatedAt: "2023-01-03T16:51:33.000Z",
    });
  });

  test('should handle add new product error', async () => {
    const newProduct = {
      title: "New Product",
      price: 10,
      description: "A description",
      categoryId: 1000,
      images: ["https://placeimg.com/640/480/any"],
    };
    const result = getResult(useAddProductMutation)();

    act(() => {
      result.current[0](newProduct);
    });

    await waitFor(() => {
      expect(result.current[1].isError).toBe(true);
    });

    expect(result.current[1].error).toEqual({ message: 'Something went wrong while adding new product' });
  });

  test('should update product successfully', async () => {
    const productNewData = {
      title: "updated product",
      price: 10,
      description: "A description",
      categoryId: 4,
      images: ["https://placeimg.com/640/480/any"],
    };
    const result = getResult(useUpdateProductMutation)();

    act(() => {
      result.current[0]({ id: 1, productNewData });
    });

    await waitFor(() => {
      expect(result.current[1].isSuccess).toBe(true);
    });

    expect(result.current[1].data).toEqual({
      ...products.find((product) => product.id === 1),
      title: productNewData.title,
      price: productNewData.price,
      description: productNewData.description,
      images: productNewData.images,
      category: categories.find((category) => category.id === productNewData.categoryId),
    });
  });

  test('should handle update product error', async () => {
    const productNewData = {
      title: "updated product",
      price: 10,
      description: "A description",
      categoryId: 10000,
      images: ["https://placeimg.com/640/480/any"],
    };
    const result = getResult(useUpdateProductMutation)();

    act(() => {
      result.current[0]({ id: 1, productNewData });
    });

    await waitFor(() => {
      expect(result.current[1].isError).toBe(true);
    });

    expect(result.current[1].error).toEqual({ message: 'Something went wrong while updating the product' });
  });

  test('should delete product successfully', async () => {
    const result = getResult(useRemoveProductMutation)();

    act(() => {
      result.current[0](1);
    });

    await waitFor(() => {
      expect(result.current[1].isSuccess).toBe(true);
    });

    expect(result.current[1].data).toEqual(true);
  });

  test('should handle delete product error', async () => {
    const result = getResult(useRemoveProductMutation)();

    act(() => {
      result.current[0](100);
    });

    await waitFor(() => {
      expect(result.current[1].isError).toBe(true);
    });

    expect(result.current[1].error).toEqual({ message: 'No such product' });
  });
});
