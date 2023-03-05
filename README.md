# Google Apps Script
Google Apps Script をローカル環境で開発するためのスターターテンプレート。<br>
自分の使い慣れたエディターで開発を進めたい方向け。<br>
設定ファイルのセッティングは必要なので、下記「初期設定」を参照。

## 使用技術・環境
- Node.js: 16.17.1
- npm: 8.15.0
- clasp: 1.0.0

## 初期設定

### 新規で作成する場合
1. 「npm i」でモジュールをインストール<br>
1. 「npx clasp create --title <プロジェクト名> --rootDir ./src」で standalone を選び、【.clasp.json】【appscript.json】を作成<br>
1. 【appscript.json】内 "timeZone" の値を "Asia/Tokyo" に変更<br>
1. 【.clasp.json】を ルートディレクトリに移動

### 既存の Google Apps Script ファイル(スプレッドシート接続済) を使用する場合
1. 「npm i」でモジュールをインストール<br>
1. 「npx clasp clone --rootDir ./src <スクリプトID>」で src ディレクトリに【**.js】【.clasp.json】【appscript.json】をクローン<br>
1. 【appscript.json】内 "timeZone" の値を "Asia/Tokyo" に変更<br>
1. 【.clasp.json】を ルートディレクトリに移動