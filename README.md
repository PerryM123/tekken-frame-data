# Tekken Frame Data ver0.4
※ [English README.md is here！](README-english.md)👈

## なぜ作ってるか

僕は最近鉄拳 7 という格闘ゲームにハマっててキャラの攻撃内容などがいろんなサイトに記載されてるけど若干見にくいので見やすくなるように自分で実装しました。

## 機能一覧

### 1) 技のコマンドを押すと技の動画が再生する
![alt text](./sampleData/video-moves.gif)

________

### 2) フレーム表の項目の並び順（昇順・降順）を変更できる
![alt text](./sampleData/video-change-order.gif)

________

### 3) テーブルの項目をハイライトできる
![alt text](./sampleData/video-highlighting.gif)


## 目的

Next.js と express.js と mysql の練習のために作成してます。

## Github Pages

https://perrym123.github.io/tekken-frame-data/

## Getting Started

```
$ git clone git@github.com:PerryM123/tekken-frame-data.git
$ cd tekken-frame-data
$ yarn
$ yarn dev
```

## Techonogies being used

- フロントエンド技術: NextJS
- バックエンド技術: Express.js
- コンテナ管理: Docker
- データベース: MySQL

※ （[バックエンド開発はここ！](https://github.com/PerryM123/tekken-frame-data-backend)）👈

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
