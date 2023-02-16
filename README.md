# Tekken Frame Data ver 0.3

## なぜ作ってるか

最近鉄拳 7 という格闘ゲームにハマっててキャラの攻撃内容がいろんなサイトに記載されてるけど若干見にくいので見やすくなるようなフレームデータ表を作成しました。

## 目的

Next.js と express.js と mysql の練習のために作成してます。

![alt text](./sampleData/ver0.3.gif)

## Getting Started

```
$ git clone git@github.com:PerryM123/tekken-frame-data.git
$ cd tekken-frame-data
$ yarn
$ yarn dev
```

## Techonogies being used

- フロント技術: NextJs
- サーバーサイド技術: express.JS (TODO: Add repo here)
- データベース: mysql

## prettier設定について

vscodeを使ってる方の場合、以下の設定をsettings.jsonに保存していただければと思います。

```
{
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
