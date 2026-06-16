type LoginPageProps = {
  searchParams?: {
    paid?: string;
  };
};

export default function Login({ searchParams }: LoginPageProps) {
  const isPaid = searchParams?.paid === '1';

  if (!isPaid) {
    return (
      <main className="section">
        <div className="container">
          <div className="card" style={{ maxWidth: 560, margin: 'auto' }}>
            <h1>ご利用にはお支払い登録が必要です</h1>
            <p className="muted">
              こころの居場所をご利用いただくには、先に料金プランのお申し込みが必要です。
            </p>
            <form action="/api/create-checkout-session" method="POST">
              <button className="btn" type="submit">
                月額50円で利用を開始する
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="container">
        <div className="card" style={{ maxWidth: 560, margin: 'auto' }}>
          <h1>ログイン</h1>
          <p className="muted">
            お支払い登録が完了しました。メールアドレスでログインして、AI議事録作成画面をご利用ください。
          </p>

          <form action="/dashboard" className="form">
            <label>
              メールアドレス
              <input
                name="email"
                type="email"
                placeholder="メールアドレス"
                required
              />
            </label>
            <button className="btn" type="submit">
              ログインして利用する
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
