# Portfolio

クラウドエンジニアとしての経歴、実務経験、技術スタック、個人開発プロジェクトを紹介するポートフォリオサイトです。

## 公開URL

https://ryuse-yanagi.github.io/portfolio/

※ GitHub Pagesへのデプロイ後に公開予定。

## コンテンツ

### トップページ

* 基本情報
* 自己紹介
* 経歴
* 実務経験
* 技術スタック
* プロジェクト一覧

### プロジェクト詳細ページ

* 概要
* 主要機能
* 技術スタック
* システムアーキテクチャ
* 開発で取り組んだこと
* GitHub

## 技術スタック

| 分類      | 技術              |
| ------- | --------------- |
| フレームワーク | Nuxt 4          |
| フロントエンド | Vue 3           |
| 言語      | TypeScript      |
| スタイリング  | CSS             |
| アイコン    | lucide-vue-next |
| パッケージ管理 | npm             |
| ホスティング  | GitHub Pages    |
| CI/CD   | GitHub Actions  |

## 開発環境

| 項目      | バージョン   |
| ------- | ------- |
| Node.js | 22.22.2 |
| npm     | 10.9.7  |

## ローカル環境構築

### 1. リポジトリのクローン

```bash
git clone git@github.com:ryuse-yanagi/portfolio.git
cd portfolio
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

## デプロイ

GitHub Actionsを利用して、GitHub Pagesへの自動デプロイを行います。

| 項目 | 内容 |
| --- | --- |
| デプロイ先 | GitHub Pages |
| トリガー | `main` ブランチへのプッシュ |
| ビルド | `npx nuxt generate` |
| 公開ファイル | `.output/public` |
| 手動実行 | GitHub Actionsから実行可能 |
