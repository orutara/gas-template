# 初期設定

## 新規で作成する場合
1. 「npm i」でモジュールをインストール<br>
1. 「npx clasp create --title <プロジェクト名>」で【.clasp.json】【appscript.json】を作成<br>
1. 【.clasp.json】内 "rootDir" の値を "./dist" に変更<br>
1. 【appscript.json】内 "timeZone" の値を "Asia/Tokyo" に変更<br>
1. 【appscript.json】を dist ディレクトリに移動

## 既存の Google Apps Script ファイル(スプレッドシート接続済) を使用する場合
1. 「npm i」でモジュールをインストール<br>
1. 「npx clasp clone <スクリプトID>」で既存GASファイルをクローン<br>
1.  不必要なファイルを削除(jsファイル)<br>
1. 【.clasp.json】内 "scriptId" の値をクローン元のスクリプトIDに変更(プロジェクトの設定から確認可能)<br>
1. 【appscript.json】を dist ディレクトリに移動