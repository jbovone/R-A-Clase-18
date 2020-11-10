import Error from '../Exeptions/InternalRepository';
import { automobile, category, ID } from '../../types';
import AutomobileRepository from '../Repository/AutomobileRepository';
import * as userTypes from '../Invariances/userCategories';
import AccessDenied from '../Exeptions/AccessDenied';

export default class AutomovileService {
  automobileRepository;
  constructor(automobileRepository: AutomobileRepository) {
    this.automobileRepository = automobileRepository;
  }

  async create(car: automobile, cat: category) {
    const { MANAGEMENT_ACCESS } = userTypes;
    if (cat < MANAGEMENT_ACCESS) {
      throw new AccessDenied('Forbidden');
    }
    try {
      const automobile = await this.automobileRepository.create(car);
      return automobile;
    } catch (error) {
      throw new Error('Unhandled at Automobile Service');
    }
  }

  async getAll() {
    try {
      const response = await this.automobileRepository.getAll();
      return response;
    } catch (error) {
      throw new Error('Unhandled at Automobile Service');
    }
  }

  async getById(id: ID) {
    try {
      const response = await this.automobileRepository.getById(Number(id));
      return response;
    } catch (error) {
      throw new Error('Unhandled at Automobile Service');
    }
  }

  async getByfilters(filter: string) {
    try {
      const search = await this.automobileRepository.getByfilters(filter);
      return search;
    } catch (error) {
      throw new Error('Unhandled at Automobile Service');
    }
  }

  async remove(id: ID, cat: category) {
    const { MANAGEMENT_ACCESS } = userTypes;
    if (cat < MANAGEMENT_ACCESS) return new AccessDenied('forbidden');

    try {
      this.automobileRepository.remove(id);
    } catch (error) {
      throw new Error('Unhandled at Automobile Service');
    }
  }

  async updateCar() {}
}
