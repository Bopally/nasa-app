'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'nasa',
    environment,
    rootURL: '/nasa-app/',
    locationType: 'hash',
    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {},
    },

    APP: {},
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.rootURL = '/nasa-app/';
    ENV.locationType = 'hash';
  }

  return ENV;
};
