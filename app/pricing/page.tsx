export default function Pricing(){
  return (
    <main className="section">
      <div className="container grid">
        <div>
          <h1 className="h1">料金ページ</h1>
          <p className="lead">必要な機能だけを、個人や小規模チームでも始めやすい価格で。</p>
        </div>
        <div className="card">
          <p className="badge">ベーシック</p>
          <div className="price">50円<span style={{fontSize:18}}> / 月</span></div>
          <p className="muted">AI文字起こし、要約生成、タスク抽出、履歴保存、サポートページの利用が含まれます。</p>
          <form action="/api/create-checkout-session" method="POST">
            <button className="btn" type="submit">申し込む</button>
          </form>
          <p className="muted small">決済は外部決済サービスを通じて安全に処理されます。対応する支払方法は「利用可能な支払方法」ページをご確認ください。</p>
        </div>
      </div>
    </main>
  );
}
