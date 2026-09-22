import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

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
          <SignedOut>
            <Link className="login-link" href="/login">
              ログイン
            </Link>
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard">議事録作成</Link>
            <UserButton />
          </SignedIn>
        </nav>
      </div>
    </header>
  );
}
