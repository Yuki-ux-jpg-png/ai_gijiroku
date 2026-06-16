import { NextResponse } from 'next/server';
export async function POST(req: Request){const data=await req.json().catch(()=>({}));console.log('contact',data);return NextResponse.json({ok:true,message:'お問い合わせを受け付けました。メール送信サービスを接続すると通知できます。'});}
