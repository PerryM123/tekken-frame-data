# Tekken Frame Data ver0.4
※ [日本語のREADME.mdはここ！](README.md)👈

## Why Am I Making This?

Recently I've been getting to a fighting game called Tekken 7. There are various websites with strategy info but unfortunately, those websites were:
- difficult to navigate
- does not contain the functionality I wanted
for me so I decided to make my own.

## Included Features Added To The Project

### 1) When the command move is pressed, video will be displayed showing the move
![alt text](./sampleData/video-moves.gif)

________


### 2) Change the order of table details
![alt text](./sampleData/video-change-order.gif)

________

### 3) Highlighting of data within the table
![alt text](./sampleData/video-highlighting.gif)

## The Goal

To get a handle on developing with Next.js, Express.js, and mysql.

※ Express.js and mysql development will be handled on a separate repository

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

- フロント技術: NextJS
- サーバーサイド技術: express.JS (TODO: Add repo here)
- データベース: mysql

## Prettier configurations

For those using vscode, the settings below should get Prettier setup fine.

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
