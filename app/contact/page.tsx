import Link from 'next/link';
import { site } from '../../lib/site';

export default function Contact() {
  const supportEmail = site.email.trim();
  const hasEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(supportEmail);
  const phoneHref = `tel:${site.phone.replace(/[^+\d]/g, '')}`;
  const inquiryHref = hasEmail
    ? `mailto:${supportEmail}?subject=${encodeURIComponent('【こころの居場所】お問い合わせ')}`
    : undefined;
  const cancellationHref = hasEmail
    ? `mailto:${supportEmail}?subject=${encodeURIComponent('【こころの居場所】解約希望')}`
    : undefined;

  return (
    <main className="section">
      <div className="container">
        <div className="card" style={{ maxWidth: 800, margin: '0 auto' }}>
          <p className="badge">お問い合わせ窓口</p>
          <h1>お問い合わせ</h1>
          <p className="lead">
            サービスの操作、不具合、請求、解約、データ削除についてお問い合わせいただけます。
          </p>

          <section className="mini">
            <h2 style={{ fontSize: 24 }}>ご連絡方法</h2>
            {hasEmail ? (
              <>
                <p>メール：<a href={`mailto:${supportEmail}`} style={{ textDecoration: 'underline' }}>{supportEmail}</a></p>
                <div className="actions">
                  <a className="btn" href={inquiryHref}>メールで問い合わせる</a>
                  <a className="btn secondary" href={cancellationHref}>解約を申し出る</a>
                </div>
                <p className="muted small">
                  ボタンを押すとお使いのメールアプリが開きます。メールを送信して初めてお問い合わせとなります。
                  このサイト内での送信完了・解約完了を示すものではありません。
                </p>
              </>
            ) : (
              <p className="muted">
                メール窓口は現在このページに設定されていません。下記の電話番号からご連絡ください。
                ウェブフォームによるお問い合わせ受付は行っていません。
              </p>
            )}
            <p>電話：<a href={phoneHref} style={{ textDecoration: 'underline' }}>{site.phone}</a></p>
          </section>

          <section className="mini">
            <h2 style={{ fontSize: 24 }}>請求・解約について</h2>
            <p>
              ご連絡の際は「解約希望」または「請求について」と明示し、登録時のメールアドレスをお知らせください。
              運営者が契約内容を確認し、必要な手続きを行います。
            </p>
            <p className="muted small">
              お問い合わせの送信だけで解約処理が自動実行されることはありません。
              解約の完了連絡をご確認ください。カード番号・セキュリティコード・パスワードは送信しないでください。
            </p>
            <p><Link href="/cancel-policy" style={{ textDecoration: 'underline' }}>解約・キャンセルポリシーを確認する</Link></p>
          </section>
        </div>
      </div>
    </main>
  );
}
