import { automobileService } from '../../types';
import { RepositoryBase } from '../../types';

export default class AutomovileService implements automobileService {
  AutomobileRepository;
  constructor(AutomobileRepository: any) {
    this.AutomobileRepository = AutomobileRepository;
  }
  async getAll(_: any, dispatch: any) {
    /**TESTED */
    const response = await this.AutomobileRepository.getAll();
    dispatch.send('hola');
  }

  async getById(event: any, dispatch: any) {
    const { id } = event.params;
  }

  async getByfilters(event: any, dispatch: any) {
    const { filter } = event.params;
  }

  async create(event: any, dispatch: any) {
    console.log('ACA');
    const automobile = event.body;
    console.log(automobile);
  }

  async update(event: any, dispatch: any) {
    const client = event.body;
    const { id } = event.params;
  }

  async remove(event: any, dispatch: any) {
    const { id } = event.params;
    console.log('aca estamos', id);
    dispatch.send('OK!');
    return 'erased' + id;
  }

  async updateCar(event: any, dispatch: any) {
    const { id } = event.params;
  }
}
