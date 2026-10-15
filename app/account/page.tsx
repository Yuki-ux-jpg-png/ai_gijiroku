import Link from 'next/link';

/** 案内専用ページ。Stripeへの照会・解約処理は行わない。 */
export default function AccountGuidePage() {
  return (
    <main className="section">
      <div className="container">
        <div className="card" style={{ maxWidth: 800, margin: '0 auto' }}>
          <p className="badge">ご契約に関するご案内</p>
          <h1>契約・請求・解約について</h1>
          <div className="mini">
            <h2 style={{ fontSize: 24 }}>現在の契約状況</h2>
            <p>
              このページでは、契約の有効・無効、無料期間の終了日、次回請求日、解約済みかどうかを
              Stripeから取得して表示することはできません。
            </p>
            <p className="muted">
              申込時・請求時に届いたメールをご確認ください。
              詳細な確認が必要な場合は運営者にお問い合わせください。
            </p>
          </div>
          <div className="mini">
            <h2 style={{ fontSize: 24 }}>解約をご希望の場合</h2>
            <p>
              お問い合わせ窓口から「解約希望」と明記してご連絡ください。
              運営者が契約内容を確認し、解約手続きを行います。
              お問い合わせを送信しただけでは自動的に解約されません。
            </p>
            <p className="muted small">
              次回請求日を事前にご確認のうえ、余裕をもってご連絡ください。
              解約の完了連絡が届いていることをご確認ください。
            </p>
            <div className="actions">
              <Link className="btn" href="/contact">解約について問い合わせる</Link>
              <Link className="btn secondary" href="/cancel-policy">解約条件を見る</Link>
            </div>
          </div>
          <div className="mini">
            <h2 style={{ fontSize: 24 }}>お支払いについて</h2>
            <p><Link href="/pricing" style={{ textDecoration: 'underline' }}>料金プランを見る</Link></p>
            <p><Link href="/refund-policy" style={{ textDecoration: 'underline' }}>返金ポリシーを見る</Link></p>
          </div>
        </div>
      </div>
    </main>
  );
}
