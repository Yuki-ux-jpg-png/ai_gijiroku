import Link from 'next/link';
import Image from 'next/image';

export default function ScreenshotsPage() {
  return (
    <main className="section">
      <div className="container" style={{ maxWidth: 1080 }}>
        <p className="badge">画面紹介・議事録サンプル</p>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>
          AI議事録作成画面のご紹介
        </h1>
        <p className="lead">
          音声のアップロードから、要約・タスク・文字起こしの確認まで、
          サービス画面の構成と出力形式をご紹介します。
        </p>

        <div className="preview-note" role="note">
          このページの画像は、現在のアプリの画面構成をもとに再現した説明用画像です。
          ログイン後の本番画面を撮影したものではありません。
          生成結果は架空の会議を使ったサンプルであり、実際にAIで処理した結果ではありません。
          実際の出力は音声の内容・品質によって異なります。
        </div>

        <div className="preview-gallery">
          <figure className="preview-figure">
            <Image
              src="/screenshots/audio-upload.png"
              alt="音声ファイルを選択して文字起こしと要約を開始する、議事録作成画面の構成例"
              width={1180}
              height={380}
              sizes="(max-width: 800px) 100vw, 1040px"
            />
            <figcaption>
              <strong>1. 音声をアップロード</strong>
              <p>
                ファイルを選択して「文字起こし・要約を開始」を押す画面です。
                音声処理にはログインが必要です。対応するファイル形式・容量は、
                実際のアップロード画面の表示をご確認ください。
              </p>
            </figcaption>
          </figure>

          <figure className="preview-figure">
            <Image
              src="/screenshots/meeting-result-sample.png"
              alt="架空の会議の要約、タスク、文字起こしのサンプルを表示した画面構成例"
              width={1180}
              height={971}
              sizes="(max-width: 800px) 100vw, 1040px"
            />
            <figcaption>
              <strong>2. 要約・タスク・文字起こしを確認</strong>
              <p>
                アプリには「要約」「タスク」「文字起こし」の順に結果が表示されます。
                画像内の内容は説明のために作成した架空のデータです。
              </p>
            </figcaption>
          </figure>
        </div>

        <section className="preview-sample" aria-labelledby="sample-heading">
          <p className="badge">架空の会議サンプル</p>
          <h2 id="sample-heading">Webサイト公開準備の打ち合わせ</h2>
          <p className="muted">
            以下は出力形式を説明するための例文です。実際のAI処理で生成した議事録ではありません。
          </p>

          <h3>要約の例</h3>
          <p>
            来月のWebサイト公開に向け、デザインと文言の確認を進める。
            公開前に料金表示と問い合わせ導線を最終確認する。
          </p>

          <h3>タスクの例</h3>
          <ul>
            <li>田中：デザイン修正版を金曜日までに共有する</li>
            <li>佐藤：料金表示を確認する</li>
            <li>山田：お問い合わせ導線をテストする</li>
          </ul>

          <h3>文字起こしの例</h3>
          <blockquote>
            田中：来月の公開に向け、まず画面のデザインを確認しましょう。{'\n'}
            佐藤：料金表示も公開前に再確認します。{'\n'}
            山田：問い合わせフォームの確認は私が担当します。
          </blockquote>
        </section>

        <div className="actions">
          <Link className="btn" href="/login">ログインして利用する</Link>
          <Link className="btn secondary" href="/features">機能一覧を見る</Link>
        </div>
      </div>
    </main>
  );
}
