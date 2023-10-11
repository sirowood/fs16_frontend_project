import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
  substractProductInCart,
  addProductInCart,
  removeProductInCart,
  clearCart,
} from '../redux/reducers/cartReducer';
import { CartItem } from '../types/cart';
import { useAppSelector } from '../redux/store';

const useCart = () => {
  const dispatch = useDispatch();
  const cart = useAppSelector((state) => state.cart);

  const totalAmount = useMemo(() => {
    return cart.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
  }, [cart]);

  const cartBadgeContent = useMemo(() => {
    return cart.reduce((total, next) => total + next.quantity, 0);
  }, [cart]);

  const addItem = useCallback(
    (product: CartItem | Omit<CartItem, 'quantity'>) => {
      dispatch(addProductInCart({ ...product }));
    },
    [dispatch]
  );

  const substractItem = useCallback(
    (id: number) => {
      dispatch(substractProductInCart(id));
    },
    [dispatch]
  );

  const removeItem = useCallback(
    (id: number) => {
      dispatch(removeProductInCart(id));
    },
    [dispatch]
  );

  const emptyCart = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return {
    cart,
    totalAmount,
    cartBadgeContent,
    addItem,
    substractItem,
    removeItem,
    emptyCart,
  };
};

export default useCart;
