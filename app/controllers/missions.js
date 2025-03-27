import Controller from '@ember/controller';

export default class MissionsController extends Controller {
  isLoading = true; // L'état de chargement commence à true

  init() {
    super.init();
    // Simuler un délai pour voir l'effet du loading
    setTimeout(() => {
      this.set('isLoading', false);
    }, 1500);
  }
}
