import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'こころの居場所 | AI議事録作成サービス',
  description:
    '会議音声をアップロードするだけで、AIが文字起こし・要約・タスク抽出を行うAI議事録作成サービスです。'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
