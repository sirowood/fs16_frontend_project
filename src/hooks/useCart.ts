import { useState } from 'react'

const useCart = () => {
  const [cart, setCart] = useState<Cart>(JSON.parse(localStorage.getItem('cart') || '[]'));

  const updateCart = (newCart: Cart) => {
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  const getProductIndex = (productId: number, cart: Cart) => {
    return cart.findIndex((item) => item.productId === productId);
  };

  const addProductInCart = (productId: number, title: string, price: number) => {
    const newCart = [...cart];
    const productIndex = getProductIndex(productId, newCart);

    if (productIndex === -1) {
      newCart.push({
        productId,
        title,
        price,
        quantity: 1,
      });
    } else {
      newCart[productIndex].quantity += 1;
    }

    updateCart(newCart);
  };

  const substractProductInCart = (productId: number) => {
    const newCart = [...cart];
    const productIndex = getProductIndex(productId, newCart);
    newCart[productIndex].quantity -= 1;

    updateCart(newCart);
  };

  const removeProductInCart = (productId: number) => {
    const newCart = cart.filter((item) => item.productId !== productId);

    updateCart(newCart);
  };

  return {
    cart,
    addProductInCart,
    substractProductInCart,
    removeProductInCart,
  };
};

export default useCart;
