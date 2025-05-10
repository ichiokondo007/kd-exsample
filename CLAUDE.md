# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.


## プロジェクト概要

このリポジトリは、TypeScriptとExpressを利用したモノレポ構造のサンプルプロジェクトです。PNPMとTurborepoを使用して効率的なビルドとパッケージ管理を実現しています。

## アーキテクチャ

### モノレポ構造

- **apps/backend**: ExpressベースのバックエンドAPI（TypeScript）
- **apps/frontend**: ReactベースのフロントエンドUI（TailwindCSS使用）
- **packages**: 共有パッケージ（型定義など）

### データベース

- **MongoDB**: ユーザーデータの永続化に使用
- **Redis**: キャッシュやセッション管理に使用

## 必須コマンド

### インストール

```bash
# 依存関係のインストール
pnpm install
```

### ビルド

```bash
# 全パッケージをビルド
pnpm build

# 特定のパッケージのみビルド
pnpm --filter @kd-exsample/backend build
pnpm --filter @kd-exsample/frontend build
```

### 開発サーバー起動

```bash
# すべてのアプリの開発サーバーを起動
pnpm dev

# バックエンドの開発サーバーのみ起動
pnpm --filter @kd-exsample/backend dev

# フロントエンドの開発サーバーのみ起動
pnpm --filter @kd-exsample/frontend dev
```

### リンティング

```bash
# すべてのパッケージに対してリント実行
pnpm lint

# 特定のパッケージのみリント
pnpm --filter @kd-exsample/frontend lint
```

### フロントエンドCSS関連

```bash
# TailwindCSSビルド
pnpm --filter @kd-exsample/frontend build:css

# TailwindCSS監視モード
pnpm --filter @kd-exsample/frontend watch:css
```

## Docker サービス

### MongoDB

```bash
# MongoDBコンテナ起動
docker compose up -d mongodb

# MongoDBシェルにアクセス
docker exec -it mongodb mongosh -u kd -p kd --authenticationDatabase admin

# データベースリスト表示
show dbs

# kd-exsampleデータベースに切り替え
use kd-exsample

# コレクション一覧表示
show collections

# canvasコレクションのデータ取得
db.canvas.find()
```

### Redis

```bash
# Redisコンテナ起動
docker compose up -d redis

# Redisクライアントにアクセス
docker exec -it kd-redis redis-cli -a password

# 認証
AUTH password

# 基本操作
SET name value       # 値の設定
GET name             # 値の取得
DEL name             # 値の削除
KEYS *               # すべてのキー一覧
FLUSHALL             # すべてのデータ削除
```

## API エンドポイント

バックエンドサーバーが起動すると、以下のエンドポイントが利用可能になります：

- `GET /`: ウェルカムメッセージを返します
- `GET /api/users`: すべてのユーザーを返します
- `GET /api/users/:id`: 特定のIDを持つユーザーを返します
- `POST /api/users`: 新しいユーザーを作成します（name と email が必要）

## 前提条件

- Node.js v16以上
- PNPM v7以上（v10.10.0推奨）
