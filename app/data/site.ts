export const githubProfileUrl = 'https://github.com/ryuse-yanagi'

export type DesignPoint = {
  item: string
  content: string
}

export type SecurityRow = {
  category: string
  implementation: string
}

export type StackRow = {
  category: string
  technologies: string
}

export type InfoRow = {
  label: string
  value: string
}

export type CareerRow = {
  period: string
  category: string
  detail: string
}

export type ExperienceGroup = {
  title: string
  columns: readonly [string, string]
  rows: InfoRow[]
}

export const basicInfoRows: InfoRow[] = [
  { label: '名前', value: 'Ninomiya' },
  { label: '志望職種', value: 'クラウドエンジニア' },
  { label: '目指すキャリア', value: 'クラウドの設計・構築経験を積み、将来的にはクラウドアーキテクトを目指しています。' },
  { label: '学習中の資格', value: 'AWS Certified Solutions Architect - Professional（SAP）' },
  { label: '学習中の技術', value: 'Terraform（IaC）' },
]

export const introductionParagraphs: string[] = [
  'Laravel・Vue.js・Nuxtを用いたWebアプリケーション開発に携わってきました。業務では、AWSサービスを活用した非同期処理やAI機能、リアルタイム通知などの実装を経験しています。また、個人開発ではAWS環境の構築からアプリケーションのデプロイまで取り組みました。',
  'こうした経験に加え、AWS認定資格の学習を通じて、要件に応じたクラウドサービスの選定やシステム設計に関心を深め、クラウド技術を専門にしたいと考えるようになりました。',
  '今後はクラウドエンジニアとして設計・構築の実践経験を積み、専門性を高めながら、将来的にはクラウドアーキテクトを目指しています。',
]

export const careerRows: CareerRow[] = [
  { period: '2025年06月～2025年12月', category: 'プログラミングスクール', detail: 'Laravel によるバックエンド開発を中心に、Web アプリケーション開発の基礎を習得。' },
  { period: '2026年02月～2026年05月', category: '業務委託', detail: '既存アプリケーションの機能追加を担当。Laravel によるバックエンド・データベースの実装、Vue.js・Nuxt によるフロントエンドの実装に加え、AWS サービスを利用した非同期処理や AI 要約などの機能実装を経験。' },
  { period: '2026年06月～2026年10月', category: '個人開発', detail: '業務管理 Web アプリケーション「WorkMana」を開発。Nuxt・Laravel・PostgreSQL を用いたアプリケーション開発から、AWS を利用したインフラ構築・デプロイまで一貫して実施。' },
]

export const experienceGroups: ExperienceGroup[] = [
  {
    title: 'アプリケーション開発',
    columns: ['分類', '内容'],
    rows: [
      { label: 'バックエンド', value: 'Laravel を用いた API やデータベース関連の実装' },
      { label: 'フロントエンド', value: 'Vue.js・Nuxt を用いた画面の実装' },
    ],
  },
  {
    title: 'AWS機能実装',
    columns: ['AWSサービス', '内容'],
    rows: [
      { label: 'AWS Lambda', value: 'JWT 検証（Lambda Authorizer）、アラーム発生時の Slack 通知' },
      { label: 'AWS SQS', value: '非同期処理におけるメッセージのキューイング、失敗メッセージのデッドレターキュー退避' },
      { label: 'Amazon Bedrock', value: 'AI モデルを利用したテキストデータの要約処理' },
      { label: 'AWS AppSync', value: 'GraphQL サブスクリプションによるクライアントへのリアルタイム通知' },
      { label: 'Amazon CloudWatch Alarms', value: 'デッドレターキューのメッセージ数の監視、アラームの設定' },
      { label: 'Amazon SNS', value: 'アラーム発生時の Lambda への通知' },
    ],
  },
]

export const techStackRows: StackRow[] = [
  { category: 'フロントエンド', technologies: 'Nuxt 4 / Vue 3 / TypeScript' },
  { category: 'バックエンド', technologies: 'Laravel 13 / PHP 8.3' },
  { category: 'データベース', technologies: 'MySQL / PostgreSQL' },
  { category: 'インフラ', technologies: 'AWS' },
  { category: 'コンテナ', technologies: 'Docker' },
  { category: 'リアルタイム通信', technologies: 'Laravel Reverb / Laravel Echo / Pusher JS' },
  { category: '決済', technologies: 'Stripe' },
]

export type FeatureItem = {
  name: string
  description: string
}

export type Feature = {
  title: string
  items: FeatureItem[]
}

export type Project = {
  slug: string
  name: string
  summary: string[]
  overview: string[]
  features: Feature[]
  /** 一覧カードに出す主な技術 */
  stack: string[]
  stackRows: StackRow[]
  architectureImage: string
  designPoints: DesignPoint[]
  securityRows: SecurityRow[]
  developmentEfforts: InfoRow[]
  repositoryUrl: string
  /**
   * 画像は public/ からの相対パス。
   * カード: public/images/workmana/02-board.png
   * 詳細: public/images/workmana/ の screenshots
   */
  images: {
    card: string
    screenshots: {
      src: string
      alt: string
    }[]
  }
}

export const projects: Project[] = [
  {
    slug: 'workmana',
    name: 'WorkMana',
    summary: [
      'WorkManaは、チーム単位でタスクや資料を一元管理するWebアプリケーションです。',
      'ボード形式とWBS形式を切り替えながら、タスクの進捗を管理できます。',
    ],
    overview: [
      'WorkManaは、スペース単位でタスクや資料を一元管理するWebアプリケーションです。ユーザーが作成した組織内にスペースを設けて業務を管理します。',
      'スペースでは、タスクをカンバン形式のボードと、階層構造で表示するWBSの2つのビューで扱えます。WBSではガントチャートも表示でき、タスクの構造とスケジュールを確認できます。タスクの情報は両方のビューで共有されるため、表示を切り替えても同じタスクを編集できます。',
      'また、タスクには担当者、ラベル、期間、工数、進捗率などを設定でき、チェックリストやファイル添付にも対応しています。スペースには資料を作成でき、業務管理に必要な情報をまとめて管理できます。',
      '組織内では管理者と一般ユーザーの役割を設け、組織設定やユーザー管理などの操作を管理者に限定しています。さらに、同じスペースを開いているユーザーの画面にタスクや資料の変更をリアルタイムに反映する仕組みや、担当者追加や期間変更などを知らせる通知機能を備えています。',
    ],
    features: [
      {
        title: '組織管理',
        items: [
          { name: '組織管理', description: '組織の作成・編集・切り換え・削除' },
          { name: '権限管理', description: '「組織の編集・削除」は管理者のみ可能' },
        ],
      },
      {
        title: 'ユーザー管理',
        items: [
          { name: 'ユーザー管理', description: '組織内のユーザーの役割変更・削除' },
          { name: 'ユーザー招待', description: 'メールによる組織への招待・取消' },
          { name: 'プロフィール設定', description: '自分のユーザー名およびアバター画像の編集'},
          { name: '権限管理', description: '「ユーザーの役割変更・削除・招待・取消」は管理者のみ可能' },
        ],
      },
      {
        title: 'スペース管理',
        items: [
          { name: 'スペース管理', description: 'スペースの作成・編集・ピン留め・検索・並び替え・絞り込み・アーカイブ' },
          { name: '詳細設定', description: 'メンバー・スペースラベル・ステータス・説明の設定' },
          { name: 'アーカイブ管理', description: 'アーカイブ済みのスペースの復元・削除' },
          { name: '権限管理', description: '「スペースのアーカイブ・復元・削除」は管理者のみ可能' },
        ],
      },
      {
        title: 'タスク管理',
        items: [
          { name: 'タスク管理', description: '親タスクおよび子タスクの追加・編集・検索・並び替え・絞り込み・アーカイブ' },
          { name: '詳細設定', description: '担当者・タスクラベル・期間・工数・進捗率・リスト・親タスク・チェックリスト・添付ファイル・説明の設定' },
          { name: 'アーカイブ管理', description: 'アーカイブ済みのタスクの復元・削除' },
          { name: '表示形式', description: 'Board / WBS の切り替え' },
          { name: 'Board 管理', description: 'リストの追加・編集・並び替え・削除' },
          { name: 'WBS 管理', description: 'セル選択による詳細の編集、ガントチャートによる期間表示、WBSの表示項目設定' },
          { name: '権限管理', description: '「タスクのアーカイブ・復元・削除」は管理者のみ可能' },
        ],
      },
      {
        title: '資料管理',
        items: [
          { name: '資料管理', description: '資料の追加・編集・アーカイブ' },
          { name: '詳細設定', description: 'カテゴリ・説明の設定' },
          { name: '本文管理', description: '本文の編集' },
          { name: 'アーカイブ管理', description: 'アーカイブ済みの資料の復元・削除' },
          { name: '権限管理', description: '「資料のアーカイブ・復元・削除」は管理者のみ可能' },
        ],
      },
      {
        title: '設定',
        items: [
          { name: 'スペースラベル', description: 'スペース用のラベルおよびラベルカテゴリの追加・編集・並び替え・削除' },
          { name: 'ステータス', description: 'スペース用のステータスの追加・編集・並び替え・削除' },
          { name: '初期リスト', description: 'スペース作成時の初期リストの追加・編集・並び替え・削除' },
          { name: 'タスクラベル', description: 'タスク用のラベルおよびラベルカテゴリの追加・編集・並び替え・削除' },
          { name: 'カテゴリ', description: '資料用のカテゴリの追加・編集・並び替え・削除' },
          { name: '権限管理', description: 'すべて管理者のみ可能' },
        ],
      },
      {
        title: 'その他',
        items: [
          { name: '通知', description: '通知の選択による関連画面への遷移および既読化' },
          { name: 'リアルタイム同期', description: '各種データの更新を他ユーザー画面にリアルタイム反映' },
        ],
      },
    ],
    stack: [
      'Nuxt 4',
      'Vue 3',
      'TypeScript',
      'Laravel 13',
      'PHP 8.3',
      'PostgreSQL',
      'AWS',
    ],
    stackRows: [
      { category: 'フロントエンド', technologies: 'Nuxt 4 / Vue 3 / TypeScript / SCSS' },
      { category: 'バックエンド', technologies: 'Laravel 13 / PHP 8.3' },
      { category: 'データベース', technologies: 'PostgreSQL / Amazon RDS for PostgreSQL' },
      { category: '認証', technologies: 'Amazon Cognito' },
      { category: 'リアルタイム同期', technologies: 'Laravel Reverb / Laravel Echo / Pusher JS' },
      { category: '実行環境', technologies: 'Node.js 22 / nginx / PHP-FPM' },
      { category: 'コンテナ', technologies: 'Docker' },
      { category: 'コンテナレジストリ', technologies: 'Amazon ECR' },
      { category: 'コンピューティング', technologies: 'Amazon ECS / AWS Fargate' },
      { category: 'ネットワーク', technologies: 'Amazon VPC / Application Load Balancer' },
      { category: 'DNS', technologies: 'Amazon Route 53' },
      { category: '証明書', technologies: 'AWS Certificate Manager' },
      { category: 'ストレージ', technologies: 'Amazon S3' },
      { category: 'セキュリティ', technologies: 'AWS IAM / AWS Secrets Manager' },
      { category: 'ログ管理', technologies: 'Amazon CloudWatch Logs' },
      { category: 'メール配信', technologies: 'Amazon SES' },
    ],
    architectureImage: 'images/workmana/aws-architecture.png',
    designPoints: [
      {
        item: 'ネットワーク設計',
        content: 
          `● VPC 内にパブリックサブネットとプライベートサブネットを配置して2つの AZ に分散
          ● ALB による HTTPS 通信の受付と HTTP から HTTPS へのリダイレクト`
      },
      {
        item: 'アプリケーション構成',
        content:
          `● Nuxt（フロントエンド）と Laravel（バックエンド）の分離
          ● ECS Fargate でコンテナ実行
          ● ECR によるコンテナイメージ管理`
      },
      {
        item: 'データ管理',
        content:
          `● RDS for PostgreSQL によるデータ管理
          ● S3 によるファイル管理`
      },
      {
        item: '認証・認可',
        content:
          `● Amazon Cognito による認証
          ● Laravel による認可`
      },
      {
        item: 'セキュリティ',
        content:
          `● HTTPS 通信
          ● IAM ロールによるアクセス制御
          ● Secrets Manager によるシークレット管理
          ● S3 のパブリックアクセスブロックと SSE-S3 による暗号化`
      },
      {
        item: 'リアルタイム通信',
        content:
          `● Laravel Reverb によるリアルタイム通信`
      },
      {
        item: '可用性設計',
        content:
          `● ALB を2つの AZ に配置
          ● ECS は各サービス1タスク
          ● RDS はシングル AZ 構成`
      },
      {
        item: '監視・データ保護',
        content:
          `● CloudWatch Logs によるアプリケーションログの管理
          ● RDS の自動バックアップ
          ● S3 のバージョニング`
      },
    ],
    securityRows: [
      {
        category: '認証・セッション管理',
        implementation: 
          `● Amazon Cognito によるユーザー認証
          ● Authorization Code Flow with PKCE による認証フローの保護
          ● ID トークンの署名・クレーム検証
          ● HttpOnly Cookie を利用したセッション管理
          ● ログアウト時のトークン・セッション無効化`
      },
      {
        category: '認可・マルチテナント分離',
        implementation: 
          `● 組織への所属確認に基づくアクセス制御
          ● 組織およびスペース単位でのリソースアクセス制御
          ● 担当者・ラベル・親子タスクなどの関連データの整合性検証
          ● 管理操作に対する権限確認`
      },
      {
        category: '通信・本番設定の保護',
        implementation: 
          `● HTTPS・Cookie・CORS などの本番環境向け設定の検証
          ● 本番環境での認証バイパス無効化チェック`
      },
      {
        category: 'ファイル保護',
        implementation:
          `● Amazon S3 でのファイル保存
          ● アクセス権限の検証
          ● アップロード時のファイルサイズ・拡張子の制限
          ● ダウンロード時のレスポンスヘッダーによる保護`
      },
    ],
    developmentEfforts: [
      {
        label: '要件・仕様の整理',
        value: '機能要件・画面構成・操作フロー・業務ロジックを整理し、実際の利用を想定しながら仕様を検討。',
      },
      {
        label: 'マルチテナント設計',
        value: '組織・スペース単位でのデータ管理を前提に、メンバーや担当者の関係性、操作条件を整理。',
      },
      {
        label: 'リアルタイム同期の改善',
        value: '同期されない操作や画面を調査し、イベントの送受信処理を確認。',
      },
      {
        label: 'AWS 環境の構築',
        value: 'AWS コンソールを使用し、ネットワーク・コンピューティング・データベース・ストレージなどの環境を構築。',
      },
      {
        label: 'デプロイ・動作検証',
        value: 
          `ECS の環境変数やコンテナ間の連携など、デプロイに必要な設定・動作を検証。
          リアルタイム通信や Cognito の認証フローについても、デプロイ環境で動作確認・調整。`,
      },
      {
        label: '自動テスト',
        value: '主要操作の自動テストを実行し、テスト結果を確認。',
      },
    ],
    repositoryUrl: 'https://github.com/ryuse-yanagi/workmana',
    images: {
      card: 'images/workmana/02-board.png',
      screenshots: [
        { src: 'images/workmana/02-board.png', alt: 'WorkManaのボード画面' },
        { src: 'images/workmana/03-wbs.png', alt: 'WorkManaのWBS画面' },
        { src: 'images/workmana/06-task-detail.png', alt: 'WorkManaのタスク詳細画面' },
        { src: 'images/workmana/01-workspaces.png', alt: 'WorkManaのワークスペース画面' },
      ],
    },
  },
]

export function findProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
