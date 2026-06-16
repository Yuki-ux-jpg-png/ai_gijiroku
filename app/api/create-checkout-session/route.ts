import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export async function POST() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [
      {
        price: process.env.STRIPE_PRICE_ID,
        quantity: 1
      }
    ],
    success_url: `${appUrl}/login?paid=1`,
    cancel_url: `${appUrl}/pricing`,
    allow_promotion_codes: false
  });

  if (!session.url) {
    return NextResponse.json(
      { error: '決済ページを作成できませんでした。' },
      { status: 500 }
    );
  }

  return NextResponse.redirect(session.url, 303);
}
