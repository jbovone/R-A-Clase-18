import { client, ICLient, ID, user } from '../../types';
import ClientsModel from './model/ClientsModel';
import User from '../Entities/User';
import { BuildOptions } from 'sequelize/types';

export default class ClientsRepository {
  interface;
  constructor(model: typeof ClientsModel) {
    this.interface = model;
  }

  async getAll() {
    try {
      return await this.interface.findAll();
    } catch (error) {
      throw new Error('');
    }
  }

  async getById(id: string) {
    try {
      const client = await this.interface.findOne({
        where: { id },
      });
      return client;
    } catch (error) {
      throw new Error('');
    }
  }

  async getByfilters(filters: string) {
    try {
      const clients = await this.interface.findAll({
        where: {
          id: filters /**TODO this should query %LIKE filters% against any prop*/,
          name: filters,
        },
      });
      console.error('A TODO IS MARKED HERE');
      return clients;
    } catch (error) {
      throw new Error('');
    }
  }

  async getByUserAndPassword(username: string, password: string) {
    try {
      const client = await this.interface.findOne({
        where: { username, password },
      });
      return client;
    } catch (error) {
      throw new Error('');
    }
  }

  async create(user: user) {
    const newUser = new User(user);
    const buildOptions: BuildOptions = { isNewRecord: true };
    try {
      const newModel = this.interface.build(newUser, buildOptions);
      await newModel.save();
      return newModel;
    } catch (error) {
      console.log(typeof 'ERROR');
      throw new Error(error);
    }
  }

  async update(item: ICLient, data: any, where: ID) {
    await this.interface.update({ [item]: data }, { where: where as any });
  }

  async remove(id: string) {
    try {
      const deleted = await this.interface.destroy({ where: { id: id } });
      return Boolean(deleted);
    } catch (error) {
      throw new Error('');
    }
  }
}
