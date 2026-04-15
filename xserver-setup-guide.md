# leanaistartup.jp セットアップ手順（Xserver）

## 概要
01start.co.jp と同じ Xserver（IP: 183.181.82.115）に leanaistartup.jp を追加し、WordPress + Elementor Pro を構築する。

> **ドメイン構成**
> - `leanaistartup.jp` → WordPress + Elementor Pro（LP・サポートページ）
> - `leanaistartup.teachable.com` → Teachable カスタムドメイン（コース配信・Stripe決済）

---

## Step 1: Xserver にドメイン追加（5分）

1. **Xserver サーバーパネル** にログイン
   - URL: https://secure.xserver.ne.jp/xapanel/login/xserver/server/
2. 「ドメイン設定」をクリック
3. 「ドメイン設定追加」タブをクリック
4. ドメイン名に `leanaistartup.jp` を入力
5. 「無料独自SSLを利用する」にチェック ✅
6. 「高速化・アクセス数拡張機能を有効にする」にチェック ✅
7. 「確認画面へ進む」→「追加する」

## Step 2: DNS 設定（ドメイン管理画面）

leanaistartup.jp を取得したレジストラ（お名前.com? Xserver Domains?）の管理画面で：

**方法A: ネームサーバーをXserverに変更（推奨）**
- ns1.xserver.jp
- ns2.xserver.jp
- ns3.xserver.jp
- ns4.xserver.jp
- ns5.xserver.jp

**方法B: Aレコードを設定**
- `leanaistartup.jp` → `183.181.82.115`（01start.co.jp と同じIP）
- `www.leanaistartup.jp` → `183.181.82.115`

※ DNS反映に最大24時間（通常は1-2時間）

**Teachable**: カスタムドメインは使用せず `leanaistartup.teachable.com` で運用（DNS設定不要）

## Step 3: WordPress 簡単インストール（3分）

1. Xserver サーバーパネル → 「WordPress簡単インストール」
2. 対象ドメイン `leanaistartup.jp` を選択
3. 以下を入力：

| 項目 | 値 |
|------|-----|
| インストールURL | `https://leanaistartup.jp/`（サブディレクトリは空） |
| ブログ名 | リーンAIスタートアップ講座 |
| ユーザー名 | （任意。例: `leanai_admin`） |
| パスワード | （強力なパスワードを設定） |
| メールアドレス | shibasaki@01start.jp |
| データベース | 「自動でデータベースを生成する」を選択 |

4. 「確認画面へ進む」→「インストールする」

## Step 4: SSL 確認

- Xserver は無料SSL（Let's Encrypt）を自動発行
- `https://leanaistartup.jp` でアクセスできることを確認
- ※ DNS反映前はSSLエラーが出ます。DNS反映後に再確認

## Step 5: WordPress 初期設定

WordPress管理画面 `https://leanaistartup.jp/wp-admin/` にログイン後：

### 5-1. パーマリンク設定
- 設定 → パーマリンク → 「投稿名」を選択 → 保存

### 5-2. テーマ設定
- Elementor Pro 用の軽量テーマをインストール（推奨: Hello Elementor）
- 外観 → テーマ → 新規追加 → 「Hello Elementor」を検索 → インストール → 有効化

### 5-3. Elementor Pro インストール
- https://elementor.com/ で Pro ライセンスを購入（$59/年）
- ダウンロードした zip ファイルを WordPress にアップロード
- プラグイン → 新規追加 → プラグインのアップロード → elementor-pro.zip → インストール → 有効化
- Elementor → ライセンス → アクティベーション

### 5-4. 不要プラグインの削除
- Akismet Anti-Spam → 削除
- Hello Dolly → 削除

### 5-5. WordPress REST API 確認
`https://leanaistartup.jp/wp-json/wp/v2/pages` にアクセスしてJSONが返ることを確認

---

## Step 6: WordPress REST API 用のアプリケーションパスワード作成

Claude Code から WordPress API 経由でページを自動作成するために：

1. WordPress管理画面 → ユーザー → プロフィール
2. 「アプリケーションパスワード」セクションまでスクロール
3. 新しいアプリケーションパスワード名: `claude-code`
4. 「新しいアプリケーションパスワードを追加」をクリック
5. 生成されたパスワードをメモ（一度しか表示されません）

これにより、以下のコマンドでページを自動作成できます：
```bash
curl -X POST https://leanaistartup.jp/wp-json/wp/v2/pages \
  -u "leanai_admin:xxxx xxxx xxxx xxxx" \
  -H "Content-Type: application/json" \
  -d '{"title":"テストページ","content":"<p>テスト</p>","status":"draft"}'
```

---

## 完了チェックリスト

### WordPress（leanaistartup.jp）
- [ ] Xserver にドメイン追加完了
- [ ] DNS設定完了（ネームサーバー or Aレコード）
- [ ] `https://leanaistartup.jp` にアクセス可能
- [ ] WordPress 管理画面にログイン可能
- [ ] Hello Elementor テーマ有効化
- [ ] Elementor Pro インストール・アクティベーション
- [ ] パーマリンク設定（投稿名）
- [ ] REST API アプリケーションパスワード作成
- [ ] Claude Code に認証情報を共有

### Teachable（leanaistartup.teachable.com）
- [x] Teachable Starter サインアップ完了
- [x] Stripe接続完了
- [ ] Custom Text で主要UI項目を日本語化
- [ ] コース作成（メイン + Week 1無料体験）
- [ ] 価格プラン設計（3プラン）

---

## 次のステップ（Claudeが自動実行）

上記が完了したら、以下を自動で構築します：
1. WordPress REST API でページ構造を作成（/, /curriculum, /trial, /faq, /privacy, /terms）
2. Elementor テンプレートをインポートしてLP構築
3. GTM + GA4 + Clarity のタグ設置
4. OGP / Twitter Card 設定
5. LPのCTAリンクをTeachable各プランURLに差替え
