import Link from 'next/link';
import { Show, UserButton } from '@clerk/nextjs';

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
          <Show when="signed-out">
            <Link className="login-link" href="/login">
              ログイン
            </Link>
          </Show>
          <Show when="signed-in">
            <Link href="/dashboard">議事録作成</Link>
            <UserButton />
          </Show>
        </nav>
      </div>
    </header>
  );
}
