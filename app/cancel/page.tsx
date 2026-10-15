import Link from 'next/link';

export default function CancelCheckoutPage() {
  return (
    <main className="section">
      <div className="container card" style={{ maxWidth: 800 }}>
        <h1>お申し込み手続きを中断しました</h1>
        <p className="muted">
          決済画面でのお申し込み手続きを中断しました。
          これは、すでに存在する月額契約の解約手続きではありません。
        </p>
        <div className="actions">
          <Link className="btn" href="/pricing">料金ページへ戻る</Link>
          <Link className="btn secondary" href="/account">契約・解約のご案内</Link>
        </div>
      </div>
    </main>
  );
}
