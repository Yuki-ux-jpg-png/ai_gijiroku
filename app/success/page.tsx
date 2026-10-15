import Link from 'next/link';

export default function Success() {
  return (
    <main className="section">
      <div className="container card" style={{ maxWidth: 800 }}>
        <h1>お申し込み手続きについて</h1>
        <p>
          お申し込み画面から戻りました。
          このページの表示だけでは、決済完了・無料期間の開始・契約の有効性を確認できません。
        </p>
        <p className="muted">
          Stripeからの申し込み・請求に関するメールをご確認ください。
          契約内容の確認や解約のご相談は、お問い合わせ窓口で受け付けています。
        </p>
        <div className="actions">
          <Link className="btn" href="/dashboard">議事録作成画面へ</Link>
          <Link className="btn secondary" href="/account">契約についてのご案内</Link>
        </div>
      </div>
    </main>
  );
}
