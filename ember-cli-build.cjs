'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
require('dotenv').config();

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    dotEnv: {
      clientAllowedKeys: ['NASA_API_KEY'],
    },
    fingerprint: {
      prepend: '/nasa-app/',
      extensions: ['js', 'css', 'png', 'jpg', 'gif', 'map'],
    },
  });

  return app.toTree();
};

// // import EmberApp from 'ember-cli/lib/broccoli/ember-app';
// // import EmberApp from 'ember-cli/lib/broccoli/ember-app';
// // import 'dotenv/config';

// // export default function (defaults) {
// //   let app = new EmberApp(defaults, {
// //     dotEnv: {
// //       clientAllowedKeys: ['NASA_API_KEY'],
// //     },
// //     fingerprint: {
// //       prepend: '/nasa-app/',
// //       extensions: ['js', 'css', 'png', 'jpg', 'gif', 'map'],
// //     },
// //   });

// //   return app.toTree();
// // }
