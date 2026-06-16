import Link from 'next/link';

const links = [
  ['/terms', '利用規約'],
  ['/privacy', 'プライバシーポリシー'],
  ['/commerce', '特定商取引法表記'],
  ['/operator', '運営者情報'],
  ['/security-policy', 'セキュリティ'],
  ['/data-deletion-policy', 'データ削除'],
  ['/payment-methods', '支払方法'],
  ['/support', 'サポート']
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          {links.map(([href, label]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>

        <p>© {new Date().getFullYear()} こころの居場所. 個人事業主による運営。</p>
      </div>
    </footer>
  );
}
