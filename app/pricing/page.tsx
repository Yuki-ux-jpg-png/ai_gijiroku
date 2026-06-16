export default function Pricing() {
  return (
    <main className="section">
      <div className="container">
        <div>
          <h1 className="h1">料金ページ</h1>
          <p className="lead">
            個人でも始めやすい月額50円プランと、機能を大幅に強化した月額1万円プランをご用意しています。
          </p>
        </div>

        <div className="grid cards" style={{ marginTop: 32 }}>
          <div className="card">
            <p className="badge">ベーシック</p>
            <div className="price">
              50円<span style={{ fontSize: 18 }}> / 月</span>
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

            <a
              className="btn"
              href="https://buy.stripe.com/5kQaEXbEcci505s95m6c003"
            >
              50円プランで申し込む
            </a>

            <p className="muted small">
              決済はStripeの決済ページで安全に処理されます。
            </p>
          </div>

          <div className="card">
            <p className="badge">プレミアム</p>
            <div className="price">
              10,000円<span style={{ fontSize: 18 }}> / 月</span>
            </div>
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
              1万円プランについて問い合わせる
            </a>

            <p className="muted small">
              利用内容に応じて、対応言語や利用条件をご案内します。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
