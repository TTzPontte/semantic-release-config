# Semantic Release Config 📦

A extensible shared configuration for [Semantic Release](https://github.com/semantic-release/semantic-release).

![](https://github.com/pontte/semantic-release-config/workflows/promote-prod-from-preprod-branch/badge.svg)

## Install

### npm

```sh
npm install @pontte/semantic-release-config --save-dev
```

### yarn

```sh
yarn add @pontte/semantic-release-config --dev
```

## Usage

Add package to your `.releaserc.js` or [Semantic Release](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration-file) configuration file.

```js
module.exports = {
  extends: ['@pontte/semantic-release-config'],
};
```
