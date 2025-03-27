import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';

export default class MissionsController extends Controller {
  @tracked isLoading = true;
  @tracked missionsUrls = [];

  constructor() {
    super(...arguments);
    this.fetchMissions();
  }

  async fetchMissions() {
    const apiUrl = `/nasa-api/geode-py/ws/api/missions`;

    try {
      const response = await fetch(apiUrl, { method: 'GET', mode: 'cors' });
      const data = await response.json();
      this.missionsUrls = data.data.map((element) => {
        const missionIdentifier = decodeURI(element.mission.split('/')[7]);
        return missionIdentifier;
      });
    } catch (error) {
      console.error('Error fetching missions:', error);
      throw error;
    } finally {
      this.isLoading = false;
    }
    console.log(this.missionsUrls, this.isLoading);
  }
}
