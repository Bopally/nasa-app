'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    fingerprint: {
      prepend: 'https://Bopally.github.io/nasa-app/',
    },
  });

  return app.toTree();
};
