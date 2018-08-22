# vue-bolierplate-sample

## 初期設定
```
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
```

### eslintrc(設定ファイル)の編集
```js

module.exports = {
    "extends": [
      "eslint:recommended",
      "plugin:vue/recommended" //追加
    ]
};

```
### package.json(設定ファイル)の編集
```json
"scripts": {
  "lint": "./node_modules/.bin/eslint ./src/*.js"
},
```
