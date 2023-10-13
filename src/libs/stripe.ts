import Stripe from "stripe";

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

const getClientSecret = async (amount: number) => {
  const result = await stripe.paymentIntents.create({
    amount,
    currency: 'eur',
    payment_method_types: ['card'],
  });
  return result.client_secret;
};

export { getClientSecret };

export default stripe;
