import EmberRouter from '@ember/routing/router';
import config from 'nasa/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('homepage', { path: '/' });
  this.route('missions');
  this.route('mission', { path: '/missions/:mission_id' });
  this.route('iss-location');
  this.route('apod');
});
