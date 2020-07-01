const { resolve } = require('path');
const { SEMANTIC_RELEASE_CONFIG_BOT_NAME } = process.env;

let plugins = [
  '@semantic-release/commit-analyzer',
  '@semantic-release/release-notes-generator',
  '@semantic-release/changelog',
  '@semantic-release/github',
];

try {
  const packagePath = resolve(process.cwd(), 'package.json');
  const { publishConfig: { registry } } = require(packagePath);

  if (registry) {
    plugins = [...plugins, '@semantic-release/npm'];
  }
} catch (e) {}

plugins = [
  ...plugins,
  [
    '@semantic-release/git',
    {
      message: `build: promote <%= nextRelease.version %> 📦\n\nDelivery automatically by ${SEMANTIC_RELEASE_CONFIG_BOT_NAME} 🤖🛵\n\n[skip ci]`,
    },
  ],
];

module.exports = {
  plugins,
  tagFormat: '<%= version %>',
  branches: [
    'master',
    {
      name: 'beta',
      prerelease: true,
    },
    {
      name: 'alpha',
      prerelease: true,
    },
  ],
};
