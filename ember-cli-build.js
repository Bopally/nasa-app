'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    fingerprint: {
      prepend: 'https://bopally.github.io/nasa-app/',
      extensions: ['js', 'css', 'png', 'jpg', 'gif', 'map'],
    },
    autoImport: {
      webpack: {
        resolve: {
          fullySpecified: false
        }
      }
    }
  });

  return app.toTree();
};