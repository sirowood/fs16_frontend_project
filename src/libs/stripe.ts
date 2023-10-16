import Stripe from "stripe";

import { CartItem } from "../types/cart";

const stripe = new Stripe(
  process.env.REACT_APP_STRIPE_SECRET_KEY ?? '',
  {
    apiVersion: '2023-08-16',
    appInfo: {
      name: 'E-commerce App',
      version: '0.1.0',
    }
  }
);

const checkout = async (items: CartItem[]) => {
  const session = await stripe.checkout.sessions.create({
    line_items: items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: 'EUR',
        product_data: {
          name: item.title,
        },
        unit_amount: item.price * 100,
      }
    })),
    mode: 'payment',
    billing_address_collection: 'required',
    phone_number_collection: {
      enabled: true,
    },
    success_url: `${window.location.origin}/success`,
    cancel_url: `${window.location.origin}/cart`,
  })

  return session.url;
};

export default checkout;
