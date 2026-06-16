import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link className="logo" href="/">
          こころの居場所
        </Link>

        <nav className="nav" aria-label="メインナビゲーション">
          <Link href="/features">機能</Link>
          <Link href="/pricing">料金</Link>
          <Link href="/guide">利用開始</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">お問い合わせ</Link>
          <Link className="login-link" href="/login">
            ログイン
          </Link>
        </nav>
      </div>
    </header>
  );
}
