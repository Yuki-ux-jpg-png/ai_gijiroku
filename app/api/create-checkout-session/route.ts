import Stripe from 'stripe';
import { redirect } from 'next/navigation';

export const runtime = 'nodejs';

export async function POST() {
  const secret = process.env.STRIPE_SECRET_KEY;
  const price = process.env.STRIPE_PRICE_ID;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  if (!secret || !price) redirect('/pricing?error=stripe_env_missing');

  const stripe = new Stripe(secret, { apiVersion: '2025-06-30.basil' as any });
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price, quantity: 1 }],
    success_url: `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${appUrl}/cancel`,
    allow_promotion_codes: true
  });
  redirect(session.url || '/pricing');
}
