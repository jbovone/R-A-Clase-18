import { automobile } from '../../types';
import AutomobilesModel from './model/AutomobilesModel';
import Automobile from '../Entities/Automobile';

export default class AutomobileRepository {
  interface;
  constructor(model: typeof AutomobilesModel) {
    this.interface = model;
  }

  async getAll() {
    let automobiles;
    try {
      automobiles = await this.interface.findAll();
    } catch (error) {
      return false;
    }
    return automobiles;
  }

  async getById(id: number) {
    let automobile;
    try {
      automobile = await this.interface.findOne({
        where: { id },
      });
    } catch (error) {}
  }
  async getByfilters(filters: string) {
    let automobiles;
    try {
      automobiles = await this.interface.findAll({
        where: {
          id: filters,
          name: filters,
        },
      });
    } catch (error) {
      return false;
    }
    return automobiles;
  }

  async create(automobile: automobile) {
    const newAutomobile = new Automobile(automobile);
    newAutomobile.id = undefined;
    const buildOptions = { isNewRecord: true };
    try {
      await this.interface.build(newAutomobile, buildOptions).save();
      return newAutomobile;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async remove(id: number) {
    return Boolean(await this.interface.destroy({ where: { id: id } }));
  }
}
