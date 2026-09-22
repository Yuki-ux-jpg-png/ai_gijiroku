export default function Pricing() {
  return (
    <main className="section">
      <div className="container">
        <div>
          <h1 className="h1">料金ページ</h1>
          <p className="lead">
            個人でも始めやすい月額0円プランと、最初の数か月を月額50円で試せるプレミアムプランをご用意しています。
          </p>
        </div>

        <div className="grid cards" style={{ marginTop: 32 }}>
          <div className="card">
            <p className="badge">ベーシック</p>
            <div className="price">
              0円<span style={{ fontSize: 18 }}> / 月</span>
            </div>
            <p className="muted">
              AI文字起こし、要約生成、タスク抽出を気軽に試せる基本プランです。
            </p>
            <ul>
              <li>音声アップロード</li>
              <li>AI文字起こし</li>
              <li>要約生成</li>
              <li>タスク抽出</li>
            </ul>

            <form action="/api/create-checkout-session" method="POST">
              <button className="btn" type="submit">
                0円プランで申し込む
              </button>
            </form>

            <p className="muted small">
              決済はStripeの決済ページで安全に処理されます。
            </p>
          </div>

          <div className="card">
            <p className="badge">プレミアム</p>
            <p className="muted small" style={{ marginBottom: 4 }}>
              最初の数か月
            </p>
            <div className="price" style={{ marginTop: 4 }}>
              50円<span style={{ fontSize: 18 }}> / 月</span>
            </div>
            <p className="muted" style={{ marginTop: -4, fontWeight: 700 }}>
              その後は 3,500円 / 月
            </p>
            <p className="muted">
              機能が大幅に向上し、多言語対応や高精度な議事録作成を利用できる上位プランです。
            </p>
            <ul>
              <li>多言語の文字起こし対応</li>
              <li>多言語の要約生成</li>
              <li>より高精度なタスク抽出</li>
              <li>長時間音声への対応</li>
              <li>ビジネス利用・海外との会議に対応</li>
            </ul>

            <a className="btn secondary" href="/contact">
              プレミアムについて問い合わせる
            </a>

            <p className="muted small">
              最初の数か月は月額50円、その後は月額3,500円です。対応言語や利用条件をご案内します。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
