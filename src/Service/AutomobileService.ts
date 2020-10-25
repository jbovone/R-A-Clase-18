import { automobileService } from '../../types';
import Undefined from './Exeptions/UndefinedItem';
import { Dispatch } from '../../types';
import { isAutomobileValid } from './Validation/validate';

export default class AutomovileService implements automobileService {
  automobileRepository;
  constructor(automobileRepository: any) {
    this.automobileRepository = automobileRepository;
  }
  async getAll(_: any, dispatch: Dispatch) {
    try {
      const response = await this.automobileRepository.getAll();
      dispatch.send(response);
    } catch (error) {
      dispatch.status(500).send(new Undefined(error));
    }
  }

  async getById(event: any, dispatch: Dispatch) {
    const { id } = event.params;
    if (!id) return dispatch.status(400).send(new Undefined('malformed request'));

    try {
      const response = await this.automobileRepository.getById(Number(id));
      dispatch.send(response);
    } catch (error) {
      dispatch.status(404).send(new Undefined(error));
    }
  }

  async getByfilters(event: any, dispatch: Dispatch) {
    const { filter } = event.params;
    if (!filter) return dispatch.status(400).send(new Undefined('malformed request'));

    try {
      const response = await this.automobileRepository.getByfilters(filter);
      dispatch.send(response);
    } catch (error) {
      dispatch.status(404).send(new Undefined(error));
    }
  }

  async create(event: any, dispatch: Dispatch) {
    if (!isAutomobileValid(event)) {
      return dispatch.status(400).send(new Undefined('malformed request'));
    }

    try {
      const automobile = event.body;
      const response = await this.automobileRepository.create(automobile);
      dispatch.status(201).send(response);
    } catch (error) {
      dispatch.status(500).send(error);
    }
  }

  async remove(event: any, dispatch: Dispatch) {
    const { id } = event.params;
    console.log('aca estamos', id);
    dispatch.send('OK!');
    return 'erased' + id;
  }

  async updateCar(event: any, dispatch: Dispatch) {
    const { id } = event.params;
  }
}
