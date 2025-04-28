import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default class ApodImageComponent extends Component {
  @service('nasa-api') nasaApi;

  constructor() {
    super(...arguments);
    this.fetchNasaData.perform();
  }

  get isImage() {
    return this.data?.media_type === 'image';
  } 

  get isLoading() {
    return this.fetchNasaData.isRunning;
  }

  get isError() {
    return this.fetchNasaData.isError;
  }

  get data() {
    return this.fetchNasaData.lastSuccessful?.value;
  }

  get title() {
    return this.data?.title;
  }

  @action
  async updateDate(event) {
    let selectedDate = event.target.value;
    await this.fetchNasaData.perform(selectedDate);
  }

  @task
  fetchNasaData(date) {
    return yield this.nasaApi.fetchApod(date);
  }
}
