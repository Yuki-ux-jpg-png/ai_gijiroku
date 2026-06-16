export default function Pricing() {
  return (
    <main className="section">
      <div className="container grid">
        <div>
          <h1 className="h1">料金ページ</h1>
          <p className="lead">
            必要な機能だけを、個人や小規模チームでも始めやすい価格で。
          </p>
        </div>

        <div className="card">
          <p className="badge">ベーシック</p>
          <div className="price">
            50円<span style={{ fontSize: 18 }}> / 月</span>
          </div>
          <p className="muted">
            AI文字起こし、要約生成、タスク抽出を利用できます。
          </p>

          <a
            className="btn"
            href="https://buy.stripe.com/5kQaEXbEcci505s95m6c003"
          >
            申し込む
          </a>

          <p className="muted small">
            決済はStripeの決済ページで安全に処理されます。
          </p>
        </div>
      </div>
    </main>
  );
}
