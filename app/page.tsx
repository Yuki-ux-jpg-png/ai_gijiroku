import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="badge">BtoB・BtoC 対応のAI議事録サービス</p>

            <h1>
              会議も、面談も、
              <br />
              個人の記録も。
              <br />
              音声から議事録をすばやく作成。
            </h1>

            <p className="lead">
              こころの居場所は、企業・個人事業主・個人利用のすべてに対応したAI議事録作成サービスです。
              会議音声をアップロードするだけで、AIが文字起こし、要約、タスク抽出を行います。
              上位プランでは、多言語対応や高精度な要約など、より高度な機能も利用できます。
            </p>

            <div className="actions">
              <Link
                className="btn"
                href="https://buy.stripe.com/5kQaEXbEcci505s95m6c003"
              >
                月額50円で利用を開始する
              </Link>
              <Link className="btn secondary" href="/pricing">
                料金プランを見る
              </Link>
            </div>
          </div>

          <div className="card hero-card">
            <p className="muted">利用シーン</p>

            <div className="mini">
              <h3>法人・チーム利用</h3>
              <p>
                定例会議、商談、顧客ヒアリング、社内共有用の議事録作成に利用できます。
              </p>
            </div>

            <div className="mini">
              <h3>個人・一般利用</h3>
              <p>
                面談、相談、学習記録、インタビュー、個人メモの整理にも利用できます。
              </p>
            </div>

            <div className="mini">
              <h3>個人事業主・小規模事業者</h3>
              <p>
                打ち合わせ内容、依頼事項、次回までのタスクを短時間で整理できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>BtoBにも、BtoCにも使いやすい設計</h2>

          <div className="grid cards">
            <div className="card">
              <h3>仕事の会議に</h3>
              <p>
                社内会議、営業商談、プロジェクトミーティングの内容を文字起こしし、要点とタスクを整理できます。
              </p>
            </div>

            <div className="card">
              <h3>個人の記録に</h3>
              <p>
                面談、相談、学習、インタビューなど、個人の大切な会話を後から見返しやすい形にできます。
              </p>
            </div>

            <div className="card">
              <h3>上位プランで多言語にも対応</h3>
              <p>
                月額1万円プランでは、機能が大幅に向上し、多言語の文字起こしや要約にも対応できます。
                海外との打ち合わせや外国語インタビューにも活用できます。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
