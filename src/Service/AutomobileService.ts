//@ts-nocheck
import Error from '../Exeptions/InternalRepository';
import { isAutomobileValid } from '../Validation/validate';
import { ID } from '../../types';

export default class AutomovileService {
  automobileRepository;
  constructor(automobileRepository: any) {
    this.automobileRepository = automobileRepository;
  }
  async getAll() {
    try {
      const response = await this.automobileRepository.getAll();
      return response;
    } catch (error) {
      return error;
    }
  }

  async getById(id: ID) {
    try {
      const response = await this.automobileRepository.getById(Number(id));
      dispatch.send(response);
    } catch (error) {
      dispatch.status(404).send(new Error(error));
    }
  }

  async getByfilters(event: any, dispatch: Dispatch) {
    const { filter } = event.params;
    if (!filter) return dispatch.status(400).send(new Error('malformed request'));

    try {
      const response = await this.automobileRepository.getByfilters(filter);
      dispatch.send(response);
    } catch (error) {
      dispatch.status(404).send(new Error(error));
    }
  }

  async create(event: any, dispatch: Dispatch) {
    if (!isAutomobileValid(event)) {
      return dispatch.status(400).send(new Error('malformed request'));
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
    if (!id) return dispatch.status(400).send(new Error('malformed request'));
    try {
    } catch (error) {}
    console.log('aca estamos', id);
    dispatch.send('OK!');
    return 'erased' + id;
  }

  async updateCar(event: any, dispatch: Dispatch) {
    const { id } = event.params;
  }
}
