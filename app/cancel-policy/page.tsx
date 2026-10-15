import Link from 'next/link';

export default function Page() {
  return (
    <main className="section">
      <div className="container">
        <div className="card" style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1>解約・キャンセルポリシー</h1>
          <p>
            月額契約はいつでも解約を申し出ることができます。
            お申し込みから最初の3か月は月額0円、4か月目以降は月額3,500円（税込）です。
            4か月目の請求日前までに解約が完了した場合、以後の月額料金は発生しません。
            有料期間開始後は、次回更新日までに解約が完了すると、その後の請求が停止されます。
            決済済みの料金の取り扱いは返金ポリシーに従います。
          </p>
          <div className="mini">
            <h2 style={{ fontSize: 24 }}>現在の解約方法</h2>
            <p>
              現在、サイト上でお客様自身が解約を完了できる機能はありません。
              <Link href="/contact" style={{ textDecoration: 'underline' }}>お問い合わせ窓口</Link>
              から「解約希望」と記載してご連絡ください。
              運営者が契約の確認・解約処理を行い、完了をお知らせします。
            </p>
            <p className="muted small">
              ご連絡だけで解約が完了するわけではありません。請求日の前に余裕をもってお申し出ください。
            </p>
            <Link className="btn" href="/contact">解約のお問い合わせ</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
