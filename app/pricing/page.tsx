import Link from 'next/link';

export default function Pricing() {
  return (
    <main className="section">
      <div className="container">
        <div>
          <h1 className="h1">料金</h1>
          <p className="lead">
            料金プランは1つだけです。お申し込みから最初の3か月は月額0円、
            4か月目以降は月額3,500円（税込）でご利用いただけます。
          </p>
        </div>

        <div className="grid cards" style={{ marginTop: 32 }}>
          <div className="card">
            <p className="badge">月額プラン</p>
            <p className="muted small" style={{ marginBottom: 4 }}>
              お申し込みから最初の3か月
            </p>
            <div className="price" style={{ marginTop: 4 }}>
              0円<span style={{ fontSize: 18 }}> / 月</span>
            </div>
            <p className="muted" style={{ marginTop: 4, fontWeight: 700 }}>
              4か月目以降は 3,500円（税込） / 月
            </p>

            <p className="muted">
              AIによる文字起こし、要約生成、タスク抽出などの機能をご利用いただけます。
            </p>

            <ul>
              <li>音声アップロード</li>
              <li>AI文字起こし</li>
              <li>要約生成</li>
              <li>タスク抽出</li>
              <li>多言語の文字起こし・要約</li>
              <li>長時間音声への対応</li>
            </ul>

            <form action="/api/create-checkout-session" method="POST">
              <button className="btn" type="submit">
                最初の3か月0円で申し込む
              </button>
            </form>

            <p className="muted small">
              最初の3か月は0円です。4か月目以降は月額3,500円（税込）で継続します。
              いつでも解約できます。
            </p>

            <p className="muted small">
              お申し込み前に
              <Link href="/terms">利用規約</Link>、
              <Link href="/cancel-policy">解約・キャンセルポリシー</Link>、
              <Link href="/commerce">特定商取引法に基づく表記</Link>をご確認ください。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
