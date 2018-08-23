# vue-bolierplate-sample

## 初期設定

```bash
$yarn init

# ソースファイルの格納場所
$mkdir src

# Bundle後のファイル
$mkdir dist
$touch ./dist/index.html
```

## ESlint

```bash
$yarn add eslint eslint-plugin-vue --dev
$./node_modules/.bin/eslint --init
$touch .eslintignore
```

### eslintrc(設定ファイル)の編集

```js
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended" //追加
  ]
};
```

### eslint の対象外の設定

```
node_modules/
dist/bundle.js
```

### package.json の編集

```json
"scripts": {
  "lint": "./node_modules/.bin/eslint ./src/*.js"
},
```

## webpack

```
$yarn add webpack webpack-cli -D
$touch webpack.config.js
```

### webpack.config.js(設定ファイル)の編集

```js
const path = require("path");

module.exports = {
  mode: "production",
  //entryパス
  entry: "./src/main.js",
  //dist
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  }
};
```

## babel

### babel 導入

```bash
$yarn add babel-cli babel-preset-env babel-loader -D
$touch .babelrc
```

### .babelrc

```json
{
  "presets": ["env"]
}
```

### webpack.config.js に loader の追加

```js
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js, .vue$/,
        use: [
          {
            // Babel を利用する
            loader: "babel-loader"
          }
        ]
      }
    ]
  }
};
```
