import Stripe from "stripe";

import { OrderRes } from "../types/order";

const stripe = new Stripe(
  process.env.REACT_APP_STRIPE_SECRET_KEY ?? '',
  {
    apiVersion: '2023-10-16',
    appInfo: {
      name: 'E-commerce App',
      version: '0.1.0',
    }
  }
);

const checkout = async (order: OrderRes) => {
  const session = await stripe.checkout.sessions.create({
    line_items: order.orderDetails.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: 'EUR',
        product_data: {
          name: item.product.title,
        },
        unit_amount: +(item.priceAtPurchase * 100).toFixed(2),
      }
    })),
    customer_email: order.user.email,
    mode: 'payment',
    success_url: `${window.location.origin}/orders/${order.id}`,
    cancel_url: `${window.location.origin}/orders/${order.id}`,
    metadata: {
      orderId: order.id
    }
  });

  return session.url;
};

export default checkout;
