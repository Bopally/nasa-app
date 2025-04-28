import Service from '@ember/service';
import fetch from 'fetch';

import config from 'nasa/config/environment';

const apiKey = config.APP.NASA_API_KEY;

export default class NasaApiService extends Service {
  async fetchApod(date = null) {
    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    if (date) {
      url += `&date=${date}`;
    }

    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error can not fetch APOD', error);
    }
  }
}
