import { automobile } from '../Entities/Automovile';
import AutomobilesModel from './model/AutomobilesModel';

export default class AutomovileRepository {
  interface;
  constructor(AutomobileModel: typeof AutomobilesModel) {
    this.interface = AutomobileModel;
  }

  async getAll() {
    const automobiles = await this.interface.findAll();
    return automobiles;
  }

  async getById(id: string) {
    const automobile = await this.interface.findOne({
      where: { id },
    });

    return automobile;
  }

  async getByfilters(filters: string) {
    const automobiles = await this.interface.findAll({
      where: {
        id: filters,
        name: filters,
      },
    });
    return automobiles;
  }

  async create(automobile: automobile) {
    let Automobile;
    const buildOptions = { isNewRecord: !automobile.id, include: this.interface };
    Automobile = this.interface.build(automobile, buildOptions);
    try {
      Automobile = await Automobile.save();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async remove(id: string) {
    if (!id) {
      throw new Error('undefined automobile');
    }
    return Boolean(await this.interface.destroy({ where: { id: id } }));
  }
}
