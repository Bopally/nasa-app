import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class MissionsRoute extends Route {
  async model() {
    const apiUrl = `/nasa-api/geode-py/ws/api/missions`;

    try {
      const response = await fetch(apiUrl, { method: 'GET', mode: 'cors' });
      const data = await response.json();
      return data.data.map((element) => {
        console.log(element.mission);
        const missionIdentifier = decodeURI(element.mission.split('/')[7]);
        return missionIdentifier;
      });
    } catch (error) {
      console.error('Error fetching missions:', error);
      throw error;
    }
  }
}
