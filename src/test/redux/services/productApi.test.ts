import store from '../../../redux/store';
import productApi from '../../../redux/services/productApi';
import server from '../../shared/server';
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

const filters = { categoryId: '0', limit: 0, offset: 0, title: '' };

describe('productApi', () => {
  test('should get all products successfully', async () => {
    const { data } = await store.dispatch(
      productApi.endpoints.getProducts.initiate(filters)
    );

    expect(data?.items).toEqual(products);
  });

  test('should get products with category filter correctly', async () => {
    const categoryId = '4';
    const { data } = await store.dispatch(
      productApi.endpoints.getProducts.initiate({ ...filters, categoryId })
    );

    const expected = products.filter((product) =>
      product.category.id === categoryId
    );

    expect(data?.items).toEqual(expected);
  });

  test('should get products with title filter correctly', async () => {
    const title = 'Nuevo Titulo';
    const { data } = await store.dispatch(
      productApi.endpoints.getProducts.initiate({ ...filters, title })
    );

    const expected = products.filter((product) =>
      product.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
    )

    expect(data?.items).toEqual(expected);
  });

  test('should get products with limit and offset filter correctly', async () => {
    const limit = 1;
    const offset = 2;
    const { data } = await store.dispatch(
      productApi.endpoints.getProducts.initiate({ ...filters, limit, offset })
    );

    const expected = products.slice(limit * offset, limit * offset + limit);

    expect(data?.items).toEqual(expected);
  });

  test('should get products with all filters correctly', async () => {
    const categoryId = '4';
    const title = 'Nuevo Titulo';
    const limit = 1;
    const offset = 2;

    const { data } = await store.dispatch(
      productApi.endpoints.getProducts.initiate({ categoryId, title, limit, offset })
    );

    const expected = products
      .filter((product) => product.category.id === categoryId)
      .filter((product) => product.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()))
      .slice(limit * offset, limit * offset + limit);

    expect(data?.items).toEqual(expected);
  });

  test('should get valid single product successfully', async () => {
    const { data } = await store.dispatch(productApi.endpoints.getSingleProduct.initiate('2'));

    const expected = products.find((product) => product.id === '2');

    expect(data).toEqual(expected);
  });

  test('should handle get single product error', async () => {
    // Providing invalid productId
    const { error } = await store.dispatch(productApi.endpoints.getSingleProduct.initiate('100'));

    expect(error).not.toBeNull();
  });

  test('should add new product successfully', async () => {
    const newProduct = {
      title: "New Product",
      price: 10,
      description: "A description",
      categoryId: '1',
      images: [{ url: "https://placeimg.com/640/480/any" }],
    };

    const result: any = await store.dispatch(productApi.endpoints.addProduct.initiate(newProduct));

    const expected = {
      id: products.length + 1,
      title: newProduct.title,
      price: newProduct.price,
      description: newProduct.description,
      images: newProduct.images,
      category: categories.find((category) => category.id === newProduct.categoryId),
      createdAt: "2023-01-03T16:51:33.000Z",
      updatedAt: "2023-01-03T16:51:33.000Z",
    };

    expect(result.data).toEqual(expected);
  });

  test('should handle add new product error', async () => {
    //  Providing invalid categoryId
    const newProduct = {
      title: "New Product",
      price: 10,
      description: "A description",
      categoryId: '1000',
      images: [{ url: "https://placeimg.com/640/480/any" }],
    };

    const result: any = await store.dispatch(productApi.endpoints.addProduct.initiate(newProduct));

    expect(result.error).not.toBeNull();
  });

  test('should update product successfully', async () => {
    const productNewData = {
      title: "updated product",
      price: 10,
      description: "A description",
      categoryId: '4',
      images: [{ url: "https://placeimg.com/640/480/any" }],
    };

    const result: any = await store.dispatch(productApi.endpoints.updateProduct.initiate({ id: '1', productNewData }));

    const expected = {
      ...products.find((product) => product.id === '1'),
      title: productNewData.title,
      price: productNewData.price,
      description: productNewData.description,
      images: productNewData.images,
      category: categories.find((category) => category.id === productNewData.categoryId),
    };

    expect(result.data).toEqual(expected);
  });

  test('should handle update product error', async () => {
    // Providing invalid categoryId
    const productNewData = {
      title: "updated product",
      price: 10,
      description: "A description",
      categoryId: '10000',
      images: [{ url: "https://placeimg.com/640/480/any" }],
    };

    const result: any = await store.dispatch(productApi.endpoints.updateProduct.initiate({ id: '1', productNewData }));

    expect(result.error).not.toBeNull();
  });

  test('should delete product successfully', async () => {
    const result: any = await store.dispatch(productApi.endpoints.removeProduct.initiate('1'));

    expect(result.data).toEqual(true);
  });

  test('should handle delete product error', async () => {
    // Providing invalid product id
    const result: any = await store.dispatch(productApi.endpoints.removeProduct.initiate('100'));

    expect(result.error.message).toEqual(false);
  });
});
