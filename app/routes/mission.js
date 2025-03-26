import Route from '@ember/routing/route';
export default class MissionsMissionRoute extends Route {
  async model(params) {
    try {
      let response = await fetch(
        `/nasa-api/geode-py/ws/api/mission/${params.mission_id}`,
      );
      let mission = await response.json();
      return mission;
    } catch (error) {
      console.error('Error fetching mission details:', error);
    }
  }
}
