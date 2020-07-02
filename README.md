# Semantic Release Config 📦

A extensible shared configuration to [@semantic-release/semantic-release](https://github.com/semantic-release/semantic-release) 🚀📦

![](https://github.com/pontte/semantic-release-config/workflows/promote-prod-from-preprod-branch/badge.svg)

## Install

### yarn

```sh
yarn add @pontte/semantic-release-config --dev
```

### npm

```sh
npm install @pontte/semantic-release-config --save-dev
```

## Usage

Add package to your `.releaserc.js` or [Semantic Release](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration-file) configuration file.

```js
module.exports = {
  extends: ['@pontte/semantic-release-config'],
};
```
