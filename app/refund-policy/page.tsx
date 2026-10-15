import Link from 'next/link';

export default function RefundPolicyPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="card" style={{ maxWidth: 880, margin: '0 auto' }}>
          <p className="badge">Refund Policy</p>
          <h1>返金ポリシー</h1>
          <p className="lead">
            AI議事録作成サービス「こころの居場所」のご利用料金について、
            返金の条件と申請方法をご案内します。
          </p>
          <p className="muted small">最終更新日：2026年10月15日</p>

          <section className="mini">
            <h2 style={{ fontSize: 24 }}>1. 基本方針</h2>
            <p>
              本サービスはオンラインで提供するデジタルサービスです。
              利用開始後のお客様都合によるキャンセルについては、
              お支払い済みの料金を原則として返金しません。
              ただし、以下の事由に該当する場合は、請求・利用状況を確認したうえで
              全額または一部の返金を検討します。
              法令上認められるお客様の権利を制限するものではありません。
            </p>
          </section>

          <section className="mini">
            <h2 style={{ fontSize: 24 }}>2. 返金を検討するケース</h2>
            <ul>
              <li>
                <strong>二重請求・誤請求：</strong>
                同じ契約・同じ請求期間に料金が重複して請求された場合や、
                本来の金額と異なる金額が請求された場合。
              </li>
              <li>
                <strong>サービス側の重大な障害：</strong>
                当サービス側の不具合により、契約した機能を相当期間利用できず、
                状況を確認したうえで返金が適当と判断される場合。
              </li>
              <li>
                <strong>その他：</strong>
                法令により返金が必要となる場合、または個別事情を踏まえて
                運営者が返金を適当と判断した場合。
              </li>
            </ul>
            <p className="muted small">
              ご申告のみで返金が自動的に確定するものではありません。
              対象期間、実際の請求額、障害の内容などを確認して判断します。
            </p>
          </section>

          <section className="mini">
            <h2 style={{ fontSize: 24 }}>3. 返金の申請方法</h2>
            <p>
              <Link href="/contact" style={{ textDecoration: 'underline' }}>お問い合わせ窓口</Link>
              に記載されたメールまたは電話で、
              「返金希望」とお伝えください。確認を円滑に進めるため、
              次の内容をお知らせください。
            </p>
            <ul>
              <li>サービス登録時のメールアドレス</li>
              <li>請求日・請求金額（分かる範囲で構いません）</li>
              <li>返金を希望する理由と、発生した問題の内容</li>
              <li>障害の場合は発生日時・エラー内容など</li>
            </ul>
            <p className="muted small">
              カード番号、セキュリティコード、パスワードは送信しないでください。
              お問い合わせを送った時点で返金が自動実行されることはありません。
            </p>
            <div className="actions">
              <Link className="btn" href="/contact">返金について問い合わせる</Link>
              <Link className="btn secondary" href="/cancel-policy">解約・キャンセルポリシーを見る</Link>
            </div>
          </section>

          <section className="mini">
            <h2 style={{ fontSize: 24 }}>4. 確認・回答・返金処理</h2>
            <p>
              申請内容を確認し、原則として受け付けから5営業日以内を目安に
              一次回答を行います。調査が必要な場合は、結果のご案内まで
              追加でお時間をいただくことがあります。
            </p>
            <p>
              返金を行う場合は、返金額と対応内容をご案内したうえで、
              原則として元のお支払い方法に対して返金処理を行います。
              全額返金・一部返金のいずれになるかは確認結果によります。
            </p>
            <p>
              カードへの返金が明細に反映されるまでには、返金処理後、
              一般的に5～10営業日程度かかる場合があります。
              実際の反映時期はカード会社・金融機関の処理状況によって異なり、
              この期間内の着金を保証するものではありません。
            </p>
          </section>

          <section className="mini">
            <h2 style={{ fontSize: 24 }}>5. 解約と返金の違い</h2>
            <p>
              サブスクリプションの解約と、すでにお支払い済みの料金の返金は別の手続きです。
              解約を希望される場合は
              <Link href="/cancel-policy" style={{ textDecoration: 'underline' }}>解約・キャンセルポリシー</Link>
              もご確認ください。返金申請だけで今後の請求が停止することはありません。
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
