import { automobile, ID } from '../../types';
import AutomobilesModel from './model/AutomobilesModel';

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
      throw new Error('');
    }
    return automobiles;
  }

  async getById(id: ID) {
    let automobile;
    try {
      automobile = await this.interface.findOne({
        where: { id },
      });
    } catch (error) {
      throw new Error('');
    }
    return automobile;
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
      throw new Error('');
    }
    return automobiles;
  }

  async create(automobile: automobile) {
    let newAutomobile;
    const buildOptions = { isNewRecord: true };
    try {
      newAutomobile = await this.interface.build(automobile, buildOptions).save();
    } catch (error) {
      throw new Error('');
    }
    return newAutomobile;
  }

  async remove(id: ID) {
    return Boolean(await this.interface.destroy({ where: { id: id } }));
  }
}
