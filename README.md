# こころの居場所 - AI議事録SaaS

GitHub に置いて Vercel へ接続するとデプロイできる Next.js 製SaaS雛形です。

## 機能

- ランディングページ
- 料金ページ 月額50円
- Stripe Checkout サブスクリプション導線
- デモログイン
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
```

`.env.local` に以下を設定してください。

```bash
OPENAI_API_KEY=sk-...
OPENAI_TRANSCRIBE_MODEL=gpt-4o-mini-transcribe
OPENAI_SUMMARY_MODEL=gpt-4.1-mini
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PRICE_ID=price_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## GitHub / Vercel デプロイ

1. GitHub で新規リポジトリを作成
2. このフォルダの中身を push
3. Vercel で GitHub リポジトリを Import
4. Environment Variables に `.env.example` と同じ項目を登録
5. Deploy

Next.js は Vercel のフルスタック対応で GitHub 連携デプロイできます。OpenAI の Audio API は transcriptions エンドポイントで音声を文字起こしできます。Stripe Checkout はサブスクリプション決済に対応しています。

## 本番公開前の差し替え必須項目

- 運営者名
- 所在地
- 電話番号
- メールアドレス
- 特商法表記
- プライバシーポリシーの保存期間
- Stripe の本番 Price ID
- 独自ドメイン
- 認証方式。現在はデモログインです。
- DB。現在、履歴はブラウザ localStorage です。

## 注意

月額50円は決済手数料との関係で利益が小さくなる可能性があります。Stripe の最低決済金額や手数料を確認し、必要なら年額プランやポイント制も検討してください。
