# Tekken Frame Data ver0.4
※ [English README.md is here！](README-english.md)👈

## なぜ作ってるか

僕は最近鉄拳 7 という格闘ゲームにハマっててキャラの攻撃内容などがいろんなサイトに記載されてるけど若干見にくいので見やすくなるように自分で実装しました。

## 機能一覧

- 技のコマンドを押すと技の動画が再生する
![alt text](./sampleData/video-moves.gif)
- フレーム表の項目の並び順（昇順・降順）を変更できる
![alt text](./sampleData/video-change-order.gif)
- テーブルの項目をハイライトできる
![alt text](./sampleData/video-highlighting.gif)


## 目的

Next.js と express.js と mysql の練習のために作成してます。

## Github Pages

https://perrym123.github.io/tekken-frame-data/

![alt text](./sampleData/ver0.3.1.gif)

## Getting Started

```
$ git clone git@github.com:PerryM123/tekken-frame-data.git
$ cd tekken-frame-data
$ yarn
$ yarn dev
```

## Techonogies being used

- フロント技術: NextJS
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
