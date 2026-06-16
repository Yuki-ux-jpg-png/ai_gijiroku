export default function Page(){
  return (
    <main className="section">
      <div className="container">
        <div className="card">
          <h1>導入事例・利用例</h1>
          <p className="muted">こころの居場所は、オンライン面談、チーム定例、顧客ヒアリング、授業メモ、個人事業の打ち合わせ記録などで利用できます。</p>
          <div className="grid cards">
            <div className="mini-card">
              <h2>オンライン面談</h2>
              <p>面談音声を文字起こしし、決定事項や次回までの確認事項を整理できます。</p>
            </div>
            <div className="mini-card">
              <h2>チーム定例</h2>
              <p>会議後に要点と担当タスクを抽出し、メンバーへの共有を短時間で行えます。</p>
            </div>
            <div className="mini-card">
              <h2>顧客ヒアリング</h2>
              <p>会話の内容を後から見返しやすい形にまとめ、提案書や対応履歴の作成に役立てられます。</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
