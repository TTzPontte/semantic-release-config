const { resolve } = require('path');
const { GIT_COMMITTER_NAME } = process.env;

let plugins = [
  '@semantic-release/commit-analyzer',
  '@semantic-release/release-notes-generator',
  '@semantic-release/changelog',
];

try {
  const packagePath = resolve(process.cwd(), 'package.json');
  const { publishConfig: { registry } } = require(packagePath);

  if (registry) {
    plugins = [...plugins, ['@semantic-release/npm', {
      tarballDir: 'dist',
    }]];
  }
} catch (e) {
  console.info('Cannot find publish configuration.');
}

plugins = [
  ...plugins,
  [
    '@semantic-release/git',
    {
      message: `build: promote <%= nextRelease.version %> 📦\n\nDelivery automatically by @${GIT_COMMITTER_NAME} 🤖🛵`,
    },
  ],
  '@semantic-release/github',
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
