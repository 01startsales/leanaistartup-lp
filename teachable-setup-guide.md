# Teachable セットアップガイド - リーンAIスタートアップ講座

> **対象プラン**: Teachable Starter ($39/月)
> **コース**: リーンAIスタートアップ講座（12週間 / 161動画 / 約42時間）
> **カスタムドメイン**: leanaistartup.teachable.com
> **決済**: Stripe連携（日本円）
> **作成日**: 2026-04-15

---

## 目次

1. [アカウント作成 + Starter Plan購入](#1-アカウント作成--starter-plan購入)
2. [Stripe接続（日本円設定）](#2-stripe接続日本円設定)
3. [カスタムドメイン設定](#3-カスタムドメイン設定)
4. [UI日本語化（Custom Text）](#4-ui日本語化custom-text)
5. [コース作成](#5-コース作成)
6. [価格プラン設計](#6-価格プラン設計)
7. [Teachable内蔵機能の有効化](#7-teachable内蔵機能の有効化)
8. [GTMタグ追加（Head Code Snippets）](#8-gtmタグ追加head-code-snippets)
9. [完了チェックリスト](#9-完了チェックリスト)

---

## 前提条件・注意事項

### Starter プランの制限事項

| 機能 | Starter ($39/月) | 利用可否 |
|------|-----------------|---------|
| コース数 | 5コースまで | 利用可 |
| カスタムドメイン | 対応 | 利用可 |
| Stripe連携 | 対応 | 利用可 |
| Custom Text（UI日本語化） | 対応 | 利用可 |
| カゴ落ちメール | 対応 | 利用可 |
| ドリップ配信 | 対応 | 利用可 |
| 修了証 | 対応 | 利用可 |
| クイズ機能 | 対応 | 利用可 |
| API アクセス | **非対応** | Advanced ($309/月) 以上 |
| Webhook | **非対応** | Advanced ($309/月) 以上 |
| アフィリエイト | **非対応** | Pro ($119/月) 以上 |
| 高度なレポート | **非対応** | Pro ($119/月) 以上 |

> **重要**: Starter プランでは API・Webhook が使えないため、Custom Text による UI 日本語化は**管理画面から手動で1項目ずつ設定**する必要がある。自動化不可。

### コース構成（全体像）

```
Teachable スクール
├── メインコース: リーンAIスタートアップ講座（有料・3プラン）
│   ├── Week 1: AIスタートアップ入門
│   ├── Week 2: 課題発見とバリデーション
│   ├── ...
│   └── Week 12: スケーリング戦略
│
└── 無料コース: 【無料体験】リーンAIスタートアップ講座 Week 1
    └── Week 1 の全動画（クレジットカード不要）
```

---

## 1. アカウント作成 + Starter Plan購入

### 1.1 アカウント作成

1. [https://teachable.com](https://teachable.com) にアクセス
2. 「Get Started」をクリック
3. 以下を入力:
   - **Name**: Lean AI Startup School
   - **Email**: 管理者メールアドレス
   - **Password**: 強力なパスワード
4. 「Create Account」をクリック

### 1.2 スクール名の設定

1. **Settings** > **General** に移動
2. **School Name**: `リーンAIスタートアップスクール`
3. **School Subdomain**: `leanaistartup`（初期URL: `leanaistartup.teachable.com`）
4. 「Save」をクリック

### 1.3 Starter Plan へのアップグレード

1. **Settings** > **Billing** に移動
2. 「Upgrade」をクリック
3. **Starter** ($39/月) を選択
4. 支払い情報を入力して確定

> **Tip**: 年払い ($33/月 x 12 = $396/年) にすると約15%割引。ただし初期検証中は月払いを推奨。

---

## 2. Stripe接続（日本円設定）

### 2.1 Stripe アカウント準備

Stripe アカウントがない場合:
1. [https://stripe.com/jp](https://stripe.com/jp) でアカウント作成
2. 本番モードの有効化（本人確認・銀行口座登録を完了）
3. **通貨設定**: Stripe ダッシュボード > **Settings** > **Payment Methods** で **JPY（日本円）** がデフォルト通貨であることを確認

### 2.2 Teachable と Stripe の接続

1. Teachable 管理画面 > **Settings** > **Payments** に移動
2. 「Connect Stripe」をクリック
3. Stripe のログイン画面が表示される。ログインして接続を承認
4. 接続完了後、Teachable の Payments ページに「Connected to Stripe」と表示される

### 2.3 通貨設定

1. **Settings** > **Payments** の **Currency** セクション
2. ドロップダウンから **JPY - Japanese Yen** を選択
3. 「Save」をクリック

> **注意**: 通貨設定は**コース作成前に**完了すること。コース作成後に通貨を変更すると、既存の価格設定がリセットされる場合がある。

### 2.4 Stripe 手数料の確認

| 項目 | 料率 |
|------|------|
| Stripe 決済手数料 | 3.6% (国内カード) |
| Teachable 取引手数料 (Starter) | 5% |
| **合計手数料** | **約8.6%** |

> 例: 月額 9,800 の場合 → 手数料 約843 → 手取り 約8,957

---

## 3. カスタムドメイン設定

### 3.1 ドメイン取得

`leanaistartup.jp` を取得済みであることを前提とする。サブドメイン `leanaistartup.teachable.com` を Teachable に向ける。

### 3.2 DNS設定（CNAME レコード追加）

ドメイン管理パネル（Xserver / お名前.com / Cloudflare 等）で以下の CNAME レコードを追加:

| タイプ | ホスト名 | 値（CNAME先） | TTL |
|--------|---------|--------------|-----|
| CNAME | school | teachable-production.teachable.com | 3600 |

> **Xserver の場合**: サーバーパネル > ドメイン > DNS設定 > DNSレコード追加 > 種別「CNAME」、ホスト名「school」、内容「teachable-production.teachable.com」

### 3.3 Teachable 側の設定

1. **Settings** > **Domains** に移動
2. 「Add Custom Domain」をクリック
3. **Domain**: `leanaistartup.teachable.com` を入力
4. 「Add Domain」をクリック
5. Teachable が DNS 検証を実行（最大48時間かかる場合あり。通常は数分〜数時間）
6. 検証完了後、ステータスが「Active」に変わる

### 3.4 SSL証明書

Teachable が自動で Let's Encrypt の SSL 証明書を発行する。カスタムドメイン追加後、数分〜数時間で `https://leanaistartup.teachable.com` が有効になる。

### 3.5 動作確認

- ブラウザで `https://leanaistartup.teachable.com` にアクセス
- Teachable のスクール画面が表示されることを確認
- SSL（鍵マーク）が有効であることを確認

---

## 4. UI日本語化（Custom Text）

### 4.1 Custom Text 機能について

Teachable の UI は英語がデフォルト。**Custom Text** 機能で、受講者が目にするすべてのテキスト（ボタン、ナビゲーション、メール等）を日本語に書き換える。

**設定場所**: **Settings** > **Custom Text**

**操作方法**:
1. カテゴリ別にテキスト一覧が表示される
2. 各項目の英語テキストの横にある入力欄に日本語を入力
3. 「Save」をクリック

> **注意**: API がないため、1項目ずつ手動で入力する必要がある。重要な約50項目を以下にリストアップ。

### 4.2 主要50項目の日本語化対応表

以下の表を上から順に設定していく。

#### ナビゲーション・ヘッダー (10項目)

| # | カテゴリ | 英語（Original） | 日本語（Custom Text に入力） |
|---|---------|-----------------|---------------------------|
| 1 | Navigation | My Courses | マイコース |
| 2 | Navigation | All Courses | すべてのコース |
| 3 | Navigation | My Profile | マイプロフィール |
| 4 | Navigation | Sign Out | ログアウト |
| 5 | Navigation | Sign In | ログイン |
| 6 | Navigation | Sign Up | 新規登録 |
| 7 | Navigation | Home | ホーム |
| 8 | Navigation | Dashboard | ダッシュボード |
| 9 | Navigation | Search | 検索 |
| 10 | Navigation | Settings | 設定 |

#### ボタン・アクション (12項目)

| # | カテゴリ | 英語（Original） | 日本語（Custom Text に入力） |
|---|---------|-----------------|---------------------------|
| 11 | Buttons | Enroll Now | 今すぐ受講する |
| 12 | Buttons | Buy Now | 今すぐ購入 |
| 13 | Buttons | Start Course | コースを始める |
| 14 | Buttons | Continue | 続きを学習 |
| 15 | Buttons | Complete and Continue | 完了して次へ進む |
| 16 | Buttons | Mark as Complete | レッスンを完了 |
| 17 | Buttons | Previous Lecture | 前のレッスン |
| 18 | Buttons | Next Lecture | 次のレッスン |
| 19 | Buttons | Get Started | はじめる |
| 20 | Buttons | Submit | 提出する |
| 21 | Buttons | Save | 保存 |
| 22 | Buttons | Cancel | キャンセル |

#### コース・カリキュラム (8項目)

| # | カテゴリ | 英語（Original） | 日本語（Custom Text に入力） |
|---|---------|-----------------|---------------------------|
| 23 | Course | Course Curriculum | カリキュラム |
| 24 | Course | Section | セクション |
| 25 | Course | Lecture | レッスン |
| 26 | Course | lectures | レッスン |
| 27 | Course | About this course | このコースについて |
| 28 | Course | Course Description | コース概要 |
| 29 | Course | Course Progress | 学習進捗 |
| 30 | Course | % Complete | % 完了 |

#### 認証・ログイン (8項目)

| # | カテゴリ | 英語（Original） | 日本語（Custom Text に入力） |
|---|---------|-----------------|---------------------------|
| 31 | Auth | Email | メールアドレス |
| 32 | Auth | Password | パスワード |
| 33 | Auth | Forgot Password? | パスワードをお忘れですか？ |
| 34 | Auth | Reset Password | パスワードをリセット |
| 35 | Auth | Confirm Password | パスワード（確認） |
| 36 | Auth | Full Name | 氏名 |
| 37 | Auth | Already have an account? | すでにアカウントをお持ちですか？ |
| 38 | Auth | Don't have an account? | アカウントをお持ちでない方 |

#### チェックアウト・決済 (7項目)

| # | カテゴリ | 英語（Original） | 日本語（Custom Text に入力） |
|---|---------|-----------------|---------------------------|
| 39 | Checkout | Checkout | お支払い |
| 40 | Checkout | Order Summary | ご注文内容 |
| 41 | Checkout | Total | 合計金額 |
| 42 | Checkout | Subtotal | 小計 |
| 43 | Checkout | Monthly | 月額 |
| 44 | Checkout | Annually | 年額 |
| 45 | Checkout | Free | 無料 |

#### その他（学習体験） (5項目)

| # | カテゴリ | 英語（Original） | 日本語（Custom Text に入力） |
|---|---------|-----------------|---------------------------|
| 46 | Misc | Comments | コメント |
| 47 | Misc | Leave a comment | コメントを入力 |
| 48 | Misc | Certificate of Completion | 修了証 |
| 49 | Misc | Congratulations! | おめでとうございます！ |
| 50 | Misc | You have completed this course | このコースを修了しました |

### 4.3 追加で日本語化が推奨される項目

上記50項目以外にも、以下のカテゴリにテキストが存在する。優先度に応じて対応:

| カテゴリ | 項目数(目安) | 優先度 |
|---------|------------|--------|
| Error Messages | 15〜20項目 | 中（英語エラーが出ると離脱率上昇） |
| Email Templates | 10〜15項目 | 高（次セクションで別途対応） |
| Quiz/Assessment | 5〜10項目 | 高（クイズ使用時は必須） |
| Community | 5〜10項目 | 低（コミュニティ不使用なら不要） |
| Subscription Management | 5〜10項目 | 高（解約・プラン変更画面） |

### 4.4 メールテンプレートの日本語化

Teachable が自動送信するメールも Custom Text で日本語化する。

**設定場所**: **Settings** > **Custom Text** > **Emails** カテゴリ

| メール種別 | 英語件名（Original） | 日本語件名 |
|-----------|--------------------|-----------| 
| ウェルカム | Welcome to {school_name}! | {school_name}へようこそ！ |
| 購入完了 | Your purchase is confirmed | ご購入ありがとうございます |
| パスワードリセット | Reset your password | パスワードのリセット |
| コース完了 | Congratulations on completing {course_name} | {course_name}の修了おめでとうございます |
| カゴ落ち | You left something behind | お申し込みがまだ完了していません |

> **注意**: メール本文も Custom Text で変更可能。日本語化することで受講者の信頼感が大幅に向上する。

---

## 5. コース作成

### 5.1 メインコース（有料）

1. **Courses** > 「New Course」をクリック
2. 以下を入力:
   - **Course Title**: `リーンAIスタートアップ講座`
   - **Subtitle**: `12週間で学ぶ AI時代のリーンスタートアップ実践プログラム`
   - **Author**: 講師名
3. 「Create Course」をクリック

#### コースの詳細設定

**Course** > **Information** タブ:
- **Description**: コース概要（LPの内容を要約）
- **Course Image**: サムネイル画像（推奨: 1280x720px）
- **Category**: `ビジネス` / `テクノロジー`

#### セクション構成（12週分）

**Course** > **Curriculum** タブで以下のセクションを作成:

| セクション | タイトル | レッスン数(目安) |
|-----------|---------|---------------|
| Section 1 | Week 1: AIスタートアップ入門 | 12〜15動画 |
| Section 2 | Week 2: 課題発見とバリデーション | 12〜15動画 |
| Section 3 | Week 3: MVPの設計と構築 | 12〜15動画 |
| Section 4 | Week 4: ユーザーインタビューとフィードバック | 12〜15動画 |
| Section 5 | Week 5: AIプロダクトのプロトタイピング | 12〜15動画 |
| Section 6 | Week 6: ビジネスモデルキャンバス | 12〜15動画 |
| Section 7 | Week 7: マーケティング戦略 | 12〜15動画 |
| Section 8 | Week 8: 資金調達の基礎 | 12〜15動画 |
| Section 9 | Week 9: チームビルディング | 12〜15動画 |
| Section 10 | Week 10: プロダクトマーケットフィット | 12〜15動画 |
| Section 11 | Week 11: グロースハック | 12〜15動画 |
| Section 12 | Week 12: スケーリング戦略 | 12〜15動画 |

> **合計**: 161動画 / 約42時間

#### レッスン（動画）の追加

各セクション内で「Add Lecture」をクリックして動画を追加:

1. **Lecture Title**: レッスンタイトル
2. **Video**: 動画ファイルをアップロード（Teachable のホスティングを使用）
   - 対応形式: MP4（推奨）、MOV、AVI
   - 推奨設定: H.264 / 1080p / AAC音声
3. **Text**: 補足テキスト、リソースリンク
4. **Files**: 配布資料（PDF、テンプレート等）

### 5.2 無料体験コース（Week 1）

Week 1 をクレジットカード不要で体験できる、独立した無料コースを作成する。

1. **Courses** > 「New Course」をクリック
2. 以下を入力:
   - **Course Title**: `【無料体験】リーンAIスタートアップ講座 Week 1`
   - **Subtitle**: `まずは1週間、無料で体験してみてください`
3. 「Create Course」をクリック

#### 無料コースのセクション構成

| セクション | タイトル | 内容 |
|-----------|---------|------|
| Section 1 | Week 1: AIスタートアップ入門 | メインコースの Week 1 と同一の動画 |
| Section 2 | 次のステップ | メインコースへの誘導テキスト + CTA |

#### 無料コースの価格設定

1. **Course** > **Pricing** タブ
2. 「Free」を選択
3. 「Save」をクリック

> **ポイント**: 無料コースは「Free」設定により、受講登録時にクレジットカード情報を**一切求めない**。受講のハードルを極限まで下げる。

#### 無料コースからメインコースへの誘導

Section 2（次のステップ）に以下のテキストレッスンを追加:

```
Week 1 の体験、お疲れさまでした！

このまま Week 2 以降も学習を続けたい方は、
以下のリンクからメインコースにお申し込みください。

▼ リーンAIスタートアップ講座（全12週間）
https://leanaistartup.teachable.com/p/lean-ai-startup

【今だけ特別価格】
ファウンディングメンバー: 月額4,980円（先着20名限定）
```

---

## 6. 価格プラン設計

### 6.1 3プランの構成

メインコースに3つの価格プランを設定する。Teachable では1つのコースに複数の Pricing Plan を追加できる。

**設定場所**: **Courses** > 「リーンAIスタートアップ講座」 > **Pricing** タブ

#### プラン1: ファウンディングメンバー（先着20名限定）

1. 「Add Pricing Plan」をクリック
2. 設定内容:

| 設定項目 | 値 |
|---------|-----|
| Plan Name | ファウンディングメンバー（先着20名限定） |
| Plan Type | Subscription |
| Price | 4,980 (JPY) |
| Billing Frequency | Monthly |
| Enrollment Cap | **20**（これが「先着20名」の制限） |

3. **Plan Description** に以下を記載:
```
初期メンバー限定の特別価格です。
一度ご登録いただくと、退会しない限り永久に月額4,980円でご利用いただけます。
定員に達し次第、このプランの新規受付は終了します。
```

4. 「Save」をクリック

> **Enrollment Cap の動作**: 登録者数が20名に達すると、このプランは自動的に新規受付を停止する（既存メンバーはそのまま継続可能）。Teachable の標準機能として利用可能。

#### プラン2: 月額プラン

1. 「Add Pricing Plan」をクリック
2. 設定内容:

| 設定項目 | 値 |
|---------|-----|
| Plan Name | 月額プラン |
| Plan Type | Subscription |
| Price | 9,800 (JPY) |
| Billing Frequency | Monthly |

3. 「Save」をクリック

#### プラン3: 年額プラン（2ヶ月無料）

1. 「Add Pricing Plan」をクリック
2. 設定内容:

| 設定項目 | 値 |
|---------|-----|
| Plan Name | 年額プラン（2ヶ月分おトク） |
| Plan Type | Subscription |
| Price | 98,000 (JPY) |
| Billing Frequency | Yearly |

3. **Plan Description** に以下を記載:
```
年間一括払いで2ヶ月分おトク！
月額換算: 約8,167円/月（通常月額9,800円）
```

4. 「Save」をクリック

### 6.2 プラン一覧（確認用）

| プラン | 月額換算 | 年額換算 | 制限 | 対象 |
|--------|---------|---------|------|------|
| ファウンディングメンバー | 4,980 | 59,760 | 先着20名 | アーリーアダプター |
| 月額プラン | 9,800 | 117,600 | なし | 一般受講者 |
| 年額プラン | 8,167 | 98,000 | なし | 長期コミット受講者 |

### 6.3 セールスページの表示順

**Course** > **Sales Page** で価格プランの表示順を設定:
1. ファウンディングメンバー（最初に表示 = 残席少表示でFOMO喚起）
2. 月額プラン
3. 年額プラン（「おすすめ」バッジを検討）

---

## 7. Teachable内蔵機能の有効化

### 7.1 カゴ落ちメール（Abandoned Cart Email）

チェックアウトページまで進んだが購入完了しなかったユーザーに自動メールを送信する。

**設定場所**: **Settings** > **Emails** > **Abandoned Cart**

1. 「Enable Abandoned Cart Emails」をオンにする
2. 送信タイミング: チェックアウト離脱後 **1時間** (推奨)
3. メール内容を日本語に編集:

| 項目 | 設定値 |
|------|-------|
| Subject | お申し込みがまだ完了していません - リーンAIスタートアップ講座 |
| From Name | リーンAIスタートアップスクール |
| Body | (下記参照) |

メール本文の例:
```
{student_name} さん

リーンAIスタートアップ講座へのお申し込み、
まだ完了していないようです。

お手続きを再開するには、以下のリンクをクリックしてください。

{checkout_link}

ご不明な点がございましたら、お気軽にお問い合わせください。

リーンAIスタートアップスクール
```

4. 「Save」をクリック

### 7.2 ドリップ配信（Drip Content）

コンテンツを週単位で段階的に公開し、受講者が一気に先に進めないようにする。

**設定場所**: **Course** > **Drip** タブ

1. 「Enable Drip」をオンにする
2. **Drip Type**: 「Schedule based on enrollment date」を選択
3. 各セクションのドリップ設定:

| セクション | 公開タイミング |
|-----------|-------------|
| Week 1 | 受講登録日（即時公開） |
| Week 2 | 登録から7日後 |
| Week 3 | 登録から14日後 |
| Week 4 | 登録から21日後 |
| Week 5 | 登録から28日後 |
| Week 6 | 登録から35日後 |
| Week 7 | 登録から42日後 |
| Week 8 | 登録から49日後 |
| Week 9 | 登録から56日後 |
| Week 10 | 登録から63日後 |
| Week 11 | 登録から70日後 |
| Week 12 | 登録から77日後 |

4. **ドリップメール**: 新しいセクションが公開されたときに自動通知メールを送信
   - 「Send email to students when new content is available」をオンにする
   - 件名を日本語に変更: `{course_name} - Week {section_number} が公開されました`

5. 「Save」をクリック

> **注意**: 無料体験コース（Week 1）にはドリップを設定しない。即座に全レッスンにアクセス可能にする。

### 7.3 修了証（Certificate of Completion）

全レッスンを完了した受講者にデジタル修了証を自動発行する。

**設定場所**: **Course** > **Certificates** タブ

1. 「Enable Certificate」をオンにする
2. テンプレートを選択（Teachable 標準テンプレート）
3. カスタマイズ:

| 項目 | 設定値 |
|------|-------|
| Title | 修了証 |
| Subtitle | Certificate of Completion |
| Description | {student_name} は、リーンAIスタートアップ講座（全12週間・161レッスン）のすべてのカリキュラムを修了したことを証します。 |
| Issued By | リーンAIスタートアップスクール |
| Signature | 講師名 |

4. 「Save」をクリック

> **Tip**: Custom Text で「Certificate of Completion」→「修了証」に変更済みであれば、受講者画面でも日本語で表示される。

### 7.4 クイズ自動採点（Quiz）

各 Week の理解度確認クイズを設定する。

**設定場所**: 各セクション内で「Add Quiz」をクリック

1. **Quiz Title**: `Week X 理解度チェック`
2. **Quiz Type**: 「Graded Quiz」（採点あり）を選択
3. **Passing Grade**: `70`（70%以上で合格）
4. **Allow Retakes**: オン（再受験を許可）

#### クイズ問題の追加

各クイズに問題を追加:
- **Question Type**: Multiple Choice（4択推奨）
- **Question**: 問題文
- **Options**: 選択肢A〜D
- **Correct Answer**: 正解を選択
- **Explanation**: 解説（正解後に表示）

> **推奨**: 各 Week に3〜5問の理解度チェッククイズを配置。

### 7.5 レッスン完了強制（Enforce Lesson Completion）

受講者が前のレッスンを完了しないと次に進めないようにする。

**設定場所**: **Course** > **Settings** タブ

1. 「Enforce Lesson Order」をオンにする
   - 受講者は各レッスンを順番に完了する必要がある
   - 動画は最後まで視聴しないと「完了」にできない

2. 「Require Quiz Passing」をオンにする（該当する場合）
   - クイズに合格しないと次のセクションに進めない

3. 「Save」をクリック

> **注意**: 無料体験コースでは「Enforce Lesson Order」を**オフ**にすることを推奨。体験コースは自由に閲覧できる方が登録率が上がる。

---

## 8. GTMタグ追加（Head Code Snippets）

### 8.1 Google Tag Manager コードの追加

**設定場所**: **Settings** > **Code Snippets** > **Head Code**

以下のコードを「Head Code」欄に貼り付ける:

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

> **GTM-XXXXXXX** を実際の GTM コンテナ ID に置き換える。

「Save」をクリック。

### 8.2 Body Code（任意）

**Settings** > **Code Snippets** > **Body Code** に noscript タグを追加:

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

### 8.3 GTM で設定すべきイベント

GTM コンテナ内で以下のイベントトラッキングを設定:

| イベント | トリガー | 用途 |
|---------|---------|------|
| Page View | 全ページ | GA4 基本計測 |
| Purchase | サンクスページ URL 一致 | コンバージョン計測 |
| Sign Up | 登録完了ページ | 無料体験登録の計測 |
| Video Play | 動画再生開始 | エンゲージメント計測 |

> **注意**: Teachable Starter プランでは Webhook が使えないため、サーバーサイドのコンバージョン計測（Server-Side GTM）は不可。クライアントサイド計測のみ。

---

## 9. 完了チェックリスト

### Phase 1: 基盤設定

- [ ] Teachable アカウント作成
- [ ] Starter Plan ($39/月) にアップグレード
- [ ] スクール名を「リーンAIスタートアップスクール」に設定
- [ ] Stripe アカウントを接続
- [ ] 通貨を JPY（日本円）に設定
- [ ] カスタムドメイン `leanaistartup.teachable.com` の CNAME レコードを追加
- [ ] Teachable 管理画面でカスタムドメインを登録
- [ ] SSL 証明書が有効であることを確認
- [ ] `https://leanaistartup.teachable.com` にアクセスできることを確認

### Phase 2: UI日本語化

- [ ] ナビゲーション項目（10項目）を日本語化
- [ ] ボタン・アクション（12項目）を日本語化
- [ ] コース・カリキュラム（8項目）を日本語化
- [ ] 認証・ログイン（8項目）を日本語化
- [ ] チェックアウト・決済（7項目）を日本語化
- [ ] その他（学習体験）（5項目）を日本語化
- [ ] メールテンプレート（5種類以上）を日本語化
- [ ] エラーメッセージを日本語化
- [ ] サブスクリプション管理画面を日本語化

### Phase 3: コース構築

- [ ] メインコース「リーンAIスタートアップ講座」を作成
- [ ] 12セクション（Week 1〜12）を作成
- [ ] 161レッスン（動画）をアップロード
- [ ] 各 Week に理解度チェッククイズを追加
- [ ] 無料体験コース「【無料体験】Week 1」を作成
- [ ] 無料体験コースに Week 1 の動画を追加
- [ ] 無料体験コースにメインコースへの誘導レッスンを追加

### Phase 4: 価格設定

- [ ] ファウンディングメンバープラン作成（月額4,980 / 定員20名）
- [ ] 月額プラン作成（月額9,800）
- [ ] 年額プラン作成（年額98,000）
- [ ] 無料体験コースを「Free」に設定
- [ ] 各プランのチェックアウトページを確認（テスト購入）

### Phase 5: 機能有効化

- [ ] カゴ落ちメールを有効化 + 日本語化
- [ ] ドリップ配信を設定（7日ごと）
- [ ] 修了証を有効化 + 日本語化
- [ ] クイズ自動採点を設定
- [ ] レッスン完了強制をオン（メインコースのみ）
- [ ] GTM コードを Head Code Snippets に追加

### Phase 6: 最終確認

- [ ] 受講者視点でのフローテスト:
  - [ ] 無料体験コースに登録（カード不要で登録できるか）
  - [ ] 無料体験コースの動画を視聴
  - [ ] メインコースの購入フロー（各プラン）
  - [ ] ドリップ配信の動作確認
  - [ ] クイズの受験と採点
  - [ ] 修了証の発行
- [ ] メール配信テスト:
  - [ ] ウェルカムメール
  - [ ] カゴ落ちメール
  - [ ] ドリップ通知メール
- [ ] レスポンシブ確認（スマホ・タブレット）
- [ ] GTM のイベント発火確認

---

## 付録: 月次運用タスク

| タスク | 頻度 | 内容 |
|--------|------|------|
| Teachable 月額支払い確認 | 毎月 | $39 の引き落とし確認 |
| 受講者数・進捗の確認 | 毎週 | Dashboard で確認 |
| カゴ落ちメールの効果測定 | 毎月 | 開封率・CVR の確認 |
| ファウンディングメンバー残席確認 | 随時 | 20名上限の管理 |
| 受講者からの質問対応 | 随時 | コメント欄の確認 |
| コンテンツ更新 | 四半期 | 動画の差し替え・追加 |

---

## 付録: Teachable Starter から Pro/Advanced へのアップグレード判断基準

以下の状況になったら上位プランへの移行を検討:

| 状況 | 推奨プラン | 月額 |
|------|----------|------|
| コース数が5を超える | Pro | $119/月 |
| アフィリエイトプログラムを開始したい | Pro | $119/月 |
| 高度なレポートが必要 | Pro | $119/月 |
| API/Webhook で外部連携したい（n8n等） | Advanced | $309/月 |
| カスタムユーザーロールが必要 | Advanced | $309/月 |
| 受講者数が500名を超える | Business+ | $665/月 |

> **n8n 連携の観点**: 現時点では Starter プランで運用し、受講者数が増加して自動化の必要性が高まった段階で Advanced ($309/月) にアップグレードし、Webhook を活用した n8n 連携（自動タスク作成・HubSpot同期等）を構築する。
