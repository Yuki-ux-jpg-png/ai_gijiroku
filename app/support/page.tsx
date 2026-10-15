import Link from 'next/link';

export default function SupportPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="card" style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1>サポート</h1>
          <p className="lead">操作方法・不具合・請求・解約・データ削除についてご案内します。</p>
          <div className="mini">
            <h2 style={{ fontSize: 24 }}>お問い合わせ・解約のお申し出</h2>
            <p>
              <Link href="/contact" style={{ textDecoration: 'underline' }}>お問い合わせページ</Link>
              に記載したメールまたは電話でご連絡ください。
              解約は現在、このサイト内のボタンだけでは完了しません。
              運営者が契約情報を確認して手続きし、完了をお知らせします。
            </p>
            <Link className="btn" href="/contact">お問い合わせ窓口を開く</Link>
          </div>
          <div className="mini">
            <h2 style={{ fontSize: 24 }}>ご契約内容の確認</h2>
            <p>画面上で現在のStripe契約状態を照会する機能はまだありません。申込時の確認メール・請求メールをご確認ください。</p>
            <p><Link href="/account" style={{ textDecoration: 'underline' }}>契約・請求についてのご案内</Link></p>
          </div>
        </div>
      </div>
    </main>
  );
}
