import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class IssLocationController extends Controller {
  @service router;

  refreshPosition = () => {
    setInterval(() => {
      this.router.refresh();
    }, 1000);
  };
}
