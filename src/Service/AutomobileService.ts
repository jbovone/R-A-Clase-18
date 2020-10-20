import { automobileService } from '../Model/types';
import { automobile } from '../Model/Automovile';
import { Model } from 'sequelize/types';

export default class AutomovileService implements automobileService {
  constructor(AutomobileModel: automobile, Repository: typeof Model) {}
  getAll(_: any, dispatch: any) {}

  getById(event: any, dispatch: any) {
    const { id } = event.params;
  }

  getByfilters(event: any, dispatch: any) {
    const { filter } = event.params;
  }

  create(event: any, dispatch: any) {
    const user = event.body;
  }

  update(event: any, dispatch: any) {
    const client = event.body;
    const { id } = event.params;
  }

  remove(event: any, dispatch: any) {
    const { id } = event.params;
    console.log('aca estamos', id);
    dispatch.send('OK!');
    return 'erased' + id;
  }

  updateCar(event: any, dispatch: any) {
    const { id } = event.params;
  }
}
