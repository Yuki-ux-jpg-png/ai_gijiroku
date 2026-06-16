# こころの居場所 - AI議事録SaaS

GitHub に置いて Vercel へ接続するとデプロイできる Next.js 製SaaS雛形です。

## 機能

- ランディングページ
- 料金ページ 月額50円
- Stripe Checkout サブスクリプション導線
- ログイン画面
- 音声アップロード
- OpenAI Speech to Text による文字起こし
- 要約生成
- タスク抽出
- サービス利用画面
- FAQ、規約、プライバシー、特商法、返金、解約、支払方法、セキュリティ、データ削除等の必須ページ
- 個人事業主向けの運営者情報

## セットアップ

```bash
npm install
cp .env.example .env.local
npm run dev
