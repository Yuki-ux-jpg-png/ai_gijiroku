import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const BASIC_PLAN_PRICE_ID = 'price_1TvHgPI5Ynb6jjsxmYHrMx1C';
const PREMIUM_PLAN_PRICE_ID = 'price_1T930yI5Ynb6jjsx6qKSGmE4';

export async function POST(request: Request) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  if (!stripeSecretKey) {
    return NextResponse.json(
      { error: 'STRIPE_SECRET_KEY が設定されていません。' },
      { status: 500 }
    );
  }

  const formData = await request.formData();
  const plan = formData.get('plan');

  const priceId =
    plan === 'premium'
      ? PREMIUM_PLAN_PRICE_ID
      : plan === 'basic'
        ? BASIC_PLAN_PRICE_ID
        : null;

  if (!priceId) {
    return NextResponse.json(
      { error: 'プランが正しく指定されていません。' },
      { status: 400 }
    );
  }

  const stripe = new Stripe(stripeSecretKey);

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ],
    metadata: {
      plan: String(plan)
    },
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
