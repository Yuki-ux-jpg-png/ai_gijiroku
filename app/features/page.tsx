export default function Page() {
  return (
    <main className="section">
      <div className="container">
        <div className="card">
          <h1>機能紹介ページ</h1>

          <div className="mini" style={{ marginTop: 24 }}>
            <h3>音声アップロード</h3>
            <p className="muted">
              会議や打ち合わせの音声ファイルをアップロードして、議事録作成を開始できます。
            </p>
          </div>

          <div className="mini" style={{ marginTop: 18 }}>
            <h3>AI文字起こし</h3>
            <p className="muted">
              アップロードされた音声をAIがテキスト化し、会話内容を確認しやすい形に整えます。
            </p>
          </div>

          <div className="mini" style={{ marginTop: 18 }}>
            <h3>要約生成</h3>
            <p className="muted">
              長い会議内容から重要なポイントを抽出し、短時間で内容を把握できる要約を生成します。
            </p>
          </div>

          <div className="mini" style={{ marginTop: 18 }}>
            <h3>タスク抽出</h3>
            <p className="muted">
              会議内で発生した対応事項や確認事項を整理し、次に行うべき作業を見つけやすくします。
            </p>
          </div>

          <div className="mini" style={{ marginTop: 18 }}>
            <h3>履歴確認</h3>
            <p className="muted">
              作成した議事録を後から確認できるようにし、過去の会議内容を振り返りやすくします。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
