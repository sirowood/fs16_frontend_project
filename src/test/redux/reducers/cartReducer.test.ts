import cartReducer, {
  addProductInCart,
  substractProductInCart,
  removeProductInCart,
  clearCart,
} from '../../../redux/reducers/cartReducer';

describe('cartReducer', () => {
  test('should handle adding a product to the cart', () => {
    const initialState = [
      { id: '1', productId: '1', title: 'Product 1', priceAtPurchase: 10, quantity: 1, image: '' },
    ];

    const newProduct = {
      id: '0',
      productId: '2',
      title: 'Product 2',
      priceAtPurchase: 15,
      image: '',
    };

    const action = addProductInCart(newProduct);

    const newState = cartReducer(initialState, action);

    expect(newState).toHaveLength(2);
    expect(newState[1]).toEqual({ ...newProduct, quantity: 1 });
  });

  test('should handle subtracting a product from the cart', () => {
    const initialState = [
      { id: '1', productId: '1', title: 'Product 1', priceAtPurchase: 10, quantity: 2, image: '' },
      { id: '2', productId: '2', title: 'Product 2', priceAtPurchase: 15, quantity: 3, image: '' },
    ];

    const action = substractProductInCart('2');

    const newState = cartReducer(initialState, action);

    expect(newState[1].quantity).toEqual(2);
  });

  test('should handle removing a product from the cart', () => {
    const initialState = [
      { id: '1', productId: '1', title: 'Product 1', priceAtPurchase: 10, quantity: 2, image: '' },
      { id: '2', productId: '2', title: 'Product 2', priceAtPurchase: 15, quantity: 3, image: '' },
    ];

    const action = removeProductInCart('1');

    const newState = cartReducer(initialState, action);

    expect(newState).toHaveLength(1);
  });

  test('should handle clearing the cart', () => {
    const initialState = [
      { id: '1', productId: '1', title: 'Product 1', priceAtPurchase: 10, quantity: 2, image: '' },
      { id: '2', productId: '2', title: 'Product 2', priceAtPurchase: 15, quantity: 3, image: '' },
    ];

    const action = clearCart();

    const newState = cartReducer(initialState, action);

    expect(newState).toHaveLength(0);
  });
});
