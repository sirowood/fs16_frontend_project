import cartReducer, {
  addProductInCart,
  substractProductInCart,
  removeProductInCart,
  clearCart,
} from '../../../redux/reducers/cartReducer';

describe('cartReducer', () => {
  test('should handle adding a product to the cart', () => {
    const initialState = [
      { productId: 1, title: 'Product 1', price: 10, quantity: 1 },
    ];

    const newProduct = {
      productId: 2,
      title: 'Product 2',
      price: 15,
    };

    const action = addProductInCart(newProduct);

    const newState = cartReducer(initialState, action);

    expect(newState).toHaveLength(2);
    expect(newState[1]).toEqual({ ...newProduct, quantity: 1 });
  });

  test('should handle subtracting a product from the cart', () => {
    const initialState = [
      { productId: 1, title: 'Product 1', price: 10, quantity: 2 },
      { productId: 2, title: 'Product 2', price: 15, quantity: 3 },
    ];

    const action = substractProductInCart(2);

    const newState = cartReducer(initialState, action);

    expect(newState[1].quantity).toEqual(2);
  });

  test('should handle removing a product from the cart', () => {
    const initialState = [
      { productId: 1, title: 'Product 1', price: 10, quantity: 2 },
      { productId: 2, title: 'Product 2', price: 15, quantity: 3 },
    ];

    const action = removeProductInCart(1);

    const newState = cartReducer(initialState, action);

    expect(newState).toHaveLength(1);
  });

  test('should handle clearing the cart', () => {
    const initialState = [
      { productId: 1, title: 'Product 1', price: 10, quantity: 2 },
      { productId: 2, title: 'Product 2', price: 15, quantity: 3 },
    ];

    const action = clearCart();

    const newState = cartReducer(initialState, action);

    expect(newState).toHaveLength(0);
  });
});
