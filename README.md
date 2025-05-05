# KD-Exsample

このリポジトリは、TypeScriptとExpressを利用したモノレポ構造のサンプルプロジェクトです。PNPMとTurborepoを使用して効率的なビルドとパッケージ管理を実現しています。

## プロジェクト構造

```
kd-exsample/
├── apps/
│   └── backend/         # バックエンドアプリケーション (Express)
│       ├── src/
│       ├── dist/
│       ├── package.json
│       └── tsconfig.json
├── packages/
│   └── shared/          # 共有コードパッケージ
│       ├── src/
│       ├── dist/
│       ├── package.json
│       └── tsconfig.json
├── package.json         # ルートパッケージの設定
├── pnpm-workspace.yaml  # PNPMワークスペース設定
├── pnpm-lock.yaml       # 依存関係のロックファイル
└── turbo.json           # Turborepoの設定
```

## 技術スタック

- **TypeScript**: 型安全なJavaScript開発
- **Express**: バックエンドRESTful API
- **PNPM**: 高速でディスク効率の良いパッケージマネージャー
- **Turborepo**: モノレポビルドシステム

## 機能

- 共有パッケージ(`@kd-exsample/shared`)を用いた型定義の共有
- RESTful APIエンドポイント（ユーザー管理）
- ビルドの依存関係に基づいた最適化

## セットアップ

### 前提条件

- Node.js v16以上
- pnpm v7以上

### インストール

```bash
# リポジトリのクローン
git clone https://github.com/yourusername/kd-exsample.git
cd kd-exsample

# 依存関係のインストール
pnpm install
```

### ビルド

```bash
# 全パッケージをビルド
pnpm build

# 特定のパッケージのみビルド
pnpm --filter @kd-exsample/backend build
```

### 開発サーバーの起動

```bash
# バックエンドの開発サーバーを起動
pnpm --filter @kd-exsample/backend dev

# または、ディレクトリに移動して直接実行
cd apps/backend
pnpm dev
```

## API エンドポイント

バックエンドサーバーが起動すると、以下のエンドポイントが利用可能になります：

- `GET /`: ウェルカムメッセージを返します
- `GET /api/users`: すべてのユーザーを返します
- `GET /api/users/:id`: 特定のIDを持つユーザーを返します
- `POST /api/users`: 新しいユーザーを作成します（name と email が必要）

## 開発上の注意点

### 型定義の共有

`@kd-exsample/shared` パッケージには共通の型定義が含まれています。新しい型を追加する場合は、このパッケージを更新し、再ビルドしてください。

### Turborepoのキャッシュ

Turborepoはビルド結果をキャッシュして高速化します。キャッシュに問題がある場合は以下のコマンドでクリアできます：

```bash
rm -rf node_modules/.cache/turbo
```

また、`.turbo/cookies` フォルダが増え続ける場合は定期的に削除することをお勧めします。

### 依存関係の管理

新しいパッケージを追加する際は、以下のようにワークスペースプロトコルを使用してください：

```bash
# クォートで囲むことを忘れないでください
pnpm add '@kd-exsample/shared@workspace:*'
```

## ライセンス

ISC

