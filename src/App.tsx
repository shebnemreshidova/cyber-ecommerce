import { useRoutes } from 'react-router-dom';
import './App.css';
import { routerConfig } from './routes/routerConfig';
import { loadStripe } from '@stripe/stripe-js';
import type { Stripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise: Promise<Stripe | null> = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);

function App() {
  const router = useRoutes(routerConfig);

  return (
    <Elements stripe={stripePromise}>
      {router}
    </Elements>
  );
}

export default App;
