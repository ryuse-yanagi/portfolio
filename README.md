# Portfolio

これまでの実務経験や技術的な取り組み、個人開発プロジェクトを通じて、  
クラウドエンジニアを目指す自身のスキルや知識を紹介するポートフォリオサイトです。

## 公開URL

https://ryuse-yanagi.github.io/portfolio/

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

| 分類| 技術 |
| --- | --- |
| フロントエンド | Nuxt 4 / Vue 3 / TypeScript |
| アイコン | lucide-vue-next |
| パッケージ管理 | npm |
| ホスティング | GitHub Pages |
| CI/CD | GitHub Actions |

## 開発環境

| 項目 | バージョン |
| --- | --- |
| Node.js | 22.23.3 |
| npm | 10.9.9 |

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

| 項目 | 内容 |
| --- | --- |
| デプロイ先 | GitHub Pages |
| トリガー | `main` ブランチへのプッシュ |
| ビルド | `npx nuxt generate` |
| 公開ファイル | `.output/public` |
| 手動実行 | GitHub Actionsから実行可能 |
