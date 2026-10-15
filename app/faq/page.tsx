export default function Page() {
  return (
    <main className="section">
      <div className="container">
        <div className="card">
          <h1>FAQ</h1>

          <div className="mini" style={{ marginTop: 24 }}>
            <h3>Q. 利用料金はいくらですか？</h3>
            <p className="muted">
              A. お申し込みから最初の3か月は月額0円、4か月目以降は月額3,500円（税込）です。
            </p>
          </div>

          <div className="mini" style={{ marginTop: 18 }}>
            <h3>Q. 無料期間中に解約できますか？</h3>
            <p className="muted">
              A. 解約はお問い合わせ窓口で受け付けます。4か月目の請求日前までに解約処理が完了した場合、その後の月額料金は発生しません。
            </p>
          </div>

          <div className="mini" style={{ marginTop: 18 }}>
            <h3>Q. どのような機能がありますか？</h3>
            <p className="muted">
              A. AIによる文字起こし、要約生成、タスク抽出などを利用できます。
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
              A. 解約希望はいつでも申し出ることができます。サイト内での自動解約には未対応のため、運営者に連絡し、処理完了をご確認ください。
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
