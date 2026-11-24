export const githubProfileUrl = 'https://github.com/ryuse-yanagi'

export type DesignPoint = {
  item: string
  rows: {
    content: string
    reason: string
  }[]
}

export type SecurityRow = {
  category: string
  implementations: string[]
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
  { label: '志望職種', value: 'IT コンサル' },
  {
    label:
      '目指すキャリア',
    value:
      `技術的な知見と業務理解の両面から顧客の課題を捉え、
      要件整理・ソリューションの提案・設計・導入まで一貫して支援できる IT コンサルタントを目指しています。`
  },
  { label: '学習中の資格', value: 'AWS Certified Solutions Architect - Professional（SAP）' },
]

export const introductionParagraphs: string[] = [
  'Laravel・Vue.js・Nuxt を用いた Web アプリケーション開発に携わってきました。業務では、AWS サービスを活用した非同期処理や AI 機能、リアルタイム通知などの実装を経験しています。また、個人開発では AWS 環境の構築からアプリケーションのデプロイまで一貫して取り組み、Terraform によるインフラの IaC 化や GitHub Actions を用いた CI / CD パイプラインの構築も行いました。',
  'こうした経験を通じて、単にシステムを開発するだけでなく、技術を活用して課題を解決することに関心を持つようになりました。また、AWS 認定資格の学習や個人開発を通じて、システムの要件に応じた技術選定やアーキテクチャ設計の重要性を学び、技術的な知見をより上流の工程で活かしたいと考えるようになりました。',
  '今後は、技術的な専門性を土台としながら、顧客の課題や事業上のニーズを的確に捉え、IT 戦略の立案からソリューションの提案・実現まで一貫して支援できる IT コンサルタントを目指しています。',
]

export const careerRows: CareerRow[] = [
  { period: '2025年06月～2025年12月', category: 'プログラミングスクール', detail: 'Laravel によるバックエンド開発を中心に、Web アプリケーション開発の基礎を習得。' },
  { period: '2026年02月～2026年05月', category: '業務委託', detail: '既存アプリケーションの機能追加を担当。Laravel によるバックエンド・データベースの実装、Vue.js・Nuxt によるフロントエンドの実装に加え、AWS サービスを利用した非同期処理や AI 要約などの機能実装を経験。' },
  { period: '2026年06月～2026年11月', category: '個人開発', detail: '業務管理 Web アプリケーション「WorkMana」を開発。Nuxt・Laravel・PostgreSQL を用いたアプリケーション開発に加え、AWS を利用したインフラ構築・デプロイを実施。Terraform による IaC 化や GitHub Actions を用いた CI / CD パイプラインの構築にも取り組み、インフラ構成管理とデプロイプロセスの自動化を実現。' },
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
    title: 'AWS 機能実装',
    columns: ['AWS サービス', '内容'],
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
  { category: 'IaC', technologies: 'Terraform' },
  { category: 'コンテナ', technologies: 'Docker' },
  { category: 'CI / CD', technologies: 'GitHub Actions' },
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
      'Board 形式と WBS 形式を切り替えながら、タスクの進捗を管理できます。',
    ],
    overview: [
      'WorkManaは、スペース単位でタスクや資料を一元管理するWebアプリケーションです。ユーザーが作成した組織内にスペースを設けて業務を管理します。',
      'スペースでは、タスクをカンバン形式の Board と、階層構造で表示する WBS の２つのビューで扱えます。WBS ではガントチャートも表示でき、タスクの構造とスケジュールを確認できます。タスクの情報は両方のビューで共有されるため、表示を切り替えても同じタスクを編集できます。',
      'また、タスクには担当者、ラベル、期間、工数、進捗率などを設定でき、チェックリストやファイル添付にも対応しています。スペースには資料を作成でき、業務管理に必要な情報をまとめて管理できます。',
      '組織内では管理者と一般ユーザーの役割を設け、組織設定やユーザー管理などの操作を管理者に限定しています。さらに、同じスペースを開いているユーザーの画面にタスクや資料の変更をリアルタイムに反映する仕組みや、担当者追加や期間変更などを知らせる通知機能を備えています。',
      '※現在、AWS の運用コストを考慮し、デモ環境の公開を一時停止しています。アプリケーションの画面や機能については、以下のスクリーンショットをご覧ください。',
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
      'Terraform',
      'GitHub Actions',
    ],
    stackRows: [
      { category: 'フロントエンド', technologies: 'Nuxt 4 / Vue 3 / TypeScript / SCSS' },
      { category: 'バックエンド', technologies: 'Laravel 13 / PHP 8.3' },
      { category: 'データベース', technologies: 'Amazon RDS for PostgreSQL' },
      { category: '認証', technologies: 'Amazon Cognito' },
      { category: 'リアルタイム同期', technologies: 'Laravel Reverb / Laravel Echo / Pusher JS' },
      { category: '実行環境', technologies: 'Node.js 22 / nginx / PHP-FPM' },
      { category: 'コンテナ', technologies: 'Docker' },
      { category: 'コンテナレジストリ', technologies: 'Amazon ECR' },
      { category: 'コンピューティング', technologies: 'Amazon ECS / AWS Fargate' },
      { category: 'ネットワーク', technologies: 'Amazon VPC / Application Load Balancer' },
      { category: 'IaC', technologies: 'Terraform' },
      { category: 'CI / CD', technologies: 'GitHub Actions' },
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
        rows: [
          {
            content:
              `VPC 内にパブリックサブネットと
              プライベートサブネットを配置`,
            reason:
              `インターネットからのアクセス経路と
              内部リソースへの通信経路を分離するため`,
          },
          {
            content:
              `パブリックサブネットとプライベートサブネットを
              ２つの AZ に分散`,
            reason: `単一 AZ の障害による影響を軽減するため`,
          },
          {
            content:
              `ALB で HTTPS 通信を受け付け、
              HTTP 通信は HTTPS にリダイレクト`,
            reason: 
              `通信を暗号化して
              安全にアプリケーションへアクセスできるようにするため`,
          },
        ],
      },
      {
        item: 'アプリケーション構成',
        rows: [
          {
            content:
              `Nuxt（フロントエンド）と
              Laravel（バックエンド）を分離`,
            reason:
              `フロントエンドとバックエンドを
              独立して管理・デプロイできるようにするため`,
          },
          {
            content: 'ECS Fargate でコンテナを実行',
            reason: 
              `EC2 インスタンスの管理負担を抑えながら
              コンテナを実行するため`,
          },
          {
            content: `ECR でコンテナイメージを管理`,
            reason: 
              `コンテナイメージを一元管理して
              ECS へのデプロイに利用するため`,
          },
        ],
      },
      {
        item: 'データ管理',
        rows: [
          {
            content: 'RDS for PostgreSQL によるデータ管理',
            reason: 
              `マネージドサービスを利用して
              データベースの運用負担を軽減するため`,
          },
          {
            content: `S3 による画像・添付ファイルの管理`,
            reason: 
              `画像および添付ファイルを
              データベースとは分離して管理するため`,
          },
        ],
      },
      {
        item: '認証・認可',
        rows: [
          {
            content: `Amazon Cognito によるユーザー認証`,
            reason: 
              `ユーザー認証をマネージドサービスに委任して
              認証機能の実装・運用負担を軽減するため`,
          },
          {
            content: `Laravel による組織・メンバーシップに基づく認可`,
            reason:
              `アプリケーション固有の権限や
              組織単位のアクセス制御を実現するため`,
          },
        ],
      },
      {
        item: 'セキュリティ',
        rows: [
          {
            content: 
              `HTTPS 通信による
              インターネット経由の通信暗号化`,
            reason: '通信内容の盗聴や改ざんを防ぐため',
          },
          {
            content: 
              `IAM ロールによる
              AWS リソースへのアクセス制御`,
            reason: 
              `必要な AWS リソースへのアクセス権限を付与して
              認証情報を直接管理する必要をなくすため`,
          },
          {
            content: `Secrets Manager によるシークレット管理`,
            reason: `認証情報などの機密情報を安全に管理するため`,
          },
          {
            content: `S3 のパブリックアクセスブロック`,
            reason: `保存したファイルが意図せず外部公開されることを防ぐため`,
          },
          {
            content: `SSE-S3 による S3 保存データの暗号化`,
            reason: `保存データを暗号化して保護するため`,
          },
        ],
      },
      {
        item: 'リアルタイム通信',
        rows: [
          {
            content: 
              `Laravel Reverb による WebSocket 通信`,
            reason: 
              `ユーザー間で更新情報をリアルタイムに共有するため`,
          },
        ],
      },
      {
        item: '可用性設計',
        rows: [
          {
            content: 'ALB を２つの AZ にまたがるサブネットに配置',
            reason: '単一 AZ の障害による ALB への影響を軽減するため',
          },
          {
            content:
              `ECS はフロントエンド・バックエンドともに
              各１タスクで運用`,
            reason:
              `個人開発の規模に合わせて構成をシンプルに保ち
              運用・コストの負担を抑えるため`,
          },
          {
            content: `RDS はシングル AZ 構成`,
            reason: `マルチ AZ 構成と比較してコストを抑えるため`,
          },
        ],
      },
      {
        item: '監視・データ保護',
        rows: [
          {
            content: 
              `CloudWatch Logs による
              アプリケーションログの管理`,
            reason: 
              `アプリケーションの動作状況やエラーを記録して
              障害調査に利用するため`,
          },
          {
            content: 'RDS の自動バックアップ',
            reason: 
              `データベースの障害や誤操作に備え
              バックアップから復元できるようにするため`,
          },
          {
            content: 'S3 のバージョニング',
            reason: 
              `画像および添付ファイルの上書き・削除が発生した場合に
              過去のバージョンを復元できるようにするため`,
          },
        ],
      },
    ],
    securityRows: [
      {
        category: '認証・セッション管理',
        implementations: [
          'Amazon Cognito によるユーザー認証',
          'Authorization Code Flow with PKCE による認証フローの保護',
          'ID トークンの署名・クレーム検証',
          'HttpOnly Cookie を利用したセッション管理',
          'ログアウト時のトークン・セッション無効化',
        ],
      },
      {
        category: '認可・マルチテナント分離',
        implementations: [
          '組織への所属確認に基づくアクセス制御',
          '組織およびスペース単位でのリソースアクセス制御',
          '担当者・ラベル・親子タスクなどの関連データの整合性検証',
          '管理操作に対する権限確認',
        ],
      },
      {
        category: '通信・本番設定の保護',
        implementations: [
          'HTTPS・Cookie・CORS などの本番環境向け設定の検証',
          '本番環境での認証バイパス無効化チェック',
        ],
      },
      {
        category: 'ファイル保護',
        implementations: [
          'Amazon S3 でのファイル保存',
          'アクセス権限の検証',
          'アップロード時のファイルサイズ・拡張子の制限',
          'ダウンロード時のレスポンスヘッダーによる保護',
        ],
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
        label: 'IaC 化',
        value:
          `Terraform を使用して AWS リソースをコード化。
          インフラ構成の管理・再構築を可能にする仕組みを整備。`
      },
      {
        label: 'CI / CD 構築',
        value: 
          `GitHub Actions を使用して、テスト・ビルド・Docker イメージの作成を自動化。
          ECR へのイメージ登録から ECS へのデプロイまでを含む CI / CD パイプラインを構築。`
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
