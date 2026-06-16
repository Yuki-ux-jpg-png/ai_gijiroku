export default function Login(){
  return (
    <main className="section">
      <div className="container">
        <div className="card" style={{maxWidth:560,margin:'auto'}}>
          <h1>ログイン</h1>
          <p className="muted">メールアドレスでログインして、AI議事録作成画面を利用できます。</p>
          <form action="/dashboard" className="form">
            <label>
              メールアドレス
              <input name="email" type="email" placeholder="メールアドレス" required />
            </label>
            <button className="btn" type="submit">ログインして利用する</button>
          </form>
          <p className="muted small">現在の構成では、認証基盤を接続する前の入口画面として動作します。本番公開時は Supabase Auth、NextAuth、Firebase Authentication などを接続してください。</p>
        </div>
      </div>
    </main>
  );
}
