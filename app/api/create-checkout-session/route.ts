import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST() {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const stripePriceId = process.env.STRIPE_PRICE_ID;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  if (!stripeSecretKey) {
    return NextResponse.json(
      { error: 'STRIPE_SECRET_KEY が設定されていません。' },
      { status: 500 }
    );
  }

  if (!stripePriceId) {
    return NextResponse.json(
      { error: 'STRIPE_PRICE_ID が設定されていません。' },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeSecretKey);

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [
      {
        price: stripePriceId,
        quantity: 1
      }
    ],
    success_url: `${appUrl}/login?paid=1`,
    cancel_url: `${appUrl}/pricing`
  });

  if (!session.url) {
    return NextResponse.json(
      { error: '決済ページを作成できませんでした。' },
      { status: 500 }
    );
  }

  return NextResponse.redirect(session.url, 303);
}
