export default function Page() {
  return (
    <main className="section">
      <div className="container">
        <div className="card">
          <h1>利用開始ガイド</h1>

          <div className="mini" style={{ marginTop: 24 }}>
            <h3>1. 料金プランを確認する</h3>
            <p className="muted">
              料金ページで月額料金、利用できる機能、支払方法を確認してください。
            </p>
          </div>

          <div className="mini" style={{ marginTop: 18 }}>
            <h3>2. 利用登録を行う</h3>
            <p className="muted">
              ログインページからメールアドレスで利用登録を行います。登録後、サービス利用画面に進めます。
            </p>
          </div>

          <div className="mini" style={{ marginTop: 18 }}>
            <h3>3. 音声ファイルをアップロードする</h3>
            <p className="muted">
              会議や打ち合わせの音声ファイルをアップロードしてください。対応形式や容量上限は、サービス画面の案内をご確認ください。
            </p>
          </div>

          <div className="mini" style={{ marginTop: 18 }}>
            <h3>4. AI処理結果を確認する</h3>
            <p className="muted">
              アップロード後、AIが文字起こし、要約、タスク抽出を行います。処理結果は画面上で確認できます。
            </p>
          </div>

          <div className="mini" style={{ marginTop: 18 }}>
            <h3>5. 必要に応じて保存・共有する</h3>
            <p className="muted">
              生成された議事録を確認し、必要に応じてコピー、保存、関係者への共有にご利用ください。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
