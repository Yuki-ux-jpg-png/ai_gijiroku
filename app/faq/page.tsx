export default function Page() {
  return (
    <main className="section">
      <div className="container">
        <div className="card">
          <h1>FAQ</h1>

          <div className="mini" style={{ marginTop: 24 }}>
            <h3>Q. 利用料金はいくらですか？</h3>
            <p className="muted">A. 基本プランは月額50円です。</p>
          </div>

          <div className="mini" style={{ marginTop: 18 }}>
            <h3>Q. どのような機能がありますか？</h3>
            <p className="muted">
              A. AIによる文字起こし、要約生成、タスク抽出を利用できます。
            </p>
          </div>

          <div className="mini" style={{ marginTop: 18 }}>
            <h3>Q. 音声データは保存されますか？</h3>
            <p className="muted">
              A. 音声データの保存期間および削除方針については、データ削除ポリシーをご確認ください。
            </p>
          </div>

          <div className="mini" style={{ marginTop: 18 }}>
            <h3>Q. いつでも解約できますか？</h3>
            <p className="muted">
              A. はい。次回更新日前までに解約手続きを行うことで解約できます。
            </p>
          </div>

          <div className="mini" style={{ marginTop: 18 }}>
            <h3>Q. 返金はできますか？</h3>
            <p className="muted">
              A. 返金条件については、返金ポリシーをご確認ください。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
