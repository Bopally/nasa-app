import Route from '@ember/routing/route';

export default class IssRoute extends Route {
  async model() {
    try {
      let response = await fetch(
        'https://api.wheretheiss.at/v1/satellites/25544',
      );
      let data = await response.json();
      return {
        latitude: data.latitude,
        longitude: data.longitude,
        altitude: data.altitude,
        velocity: data.velocity,
      };
    } catch (error) {
      console.error('Error fetching ISS position:', error);
      return {
        latitude: null,
        longitude: null,
        altitude: null,
        velocity: null,
      };
    }
  }
}
