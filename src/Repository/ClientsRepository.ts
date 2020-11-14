import { ID, user, client, ICLient } from '../../types';
import ClientsModel from './model/ClientsModel';
import { Op } from 'sequelize';
import User from '../Entities/User';
import { BuildOptions } from 'sequelize/types';
import InternalRepository from '../Exeptions/InternalRepository';
import UserConstraints from '../Exeptions/UserConstraints';

export default class ClientsRepository {
  interface;
  constructor(model: typeof ClientsModel) {
    this.interface = model;
  }

  async getAll() {
    try {
      return await this.interface.findAll();
    } catch (error) {
      console.log(error);
      throw new InternalRepository(error);
    }
  }

  async getById(id: string) {
    try {
      const client = await this.interface.findOne({
        where: { id },
      });
      return client;
    } catch (error) {
      console.log(error);
      throw new InternalRepository(error);
    }
  }

  async getByfilters(filters: string) {
    try {
      const clients = await this.interface.findAll({
        where: {
          [Op.like]: filters,
        },
      });
      return clients;
    } catch (error) {
      throw new InternalRepository(error);
    }
  }

  async getByUserAndPassword(username: string, password: string) {
    try {
      const client = await this.interface.findOne({
        where: { username, password },
      });
      return client;
    } catch (error) {
      throw new InternalRepository(error);
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
      if (error.parent.code === 'SQLITE_CONSTRAINT') {
        const formated = UserConstraints.format(error.fields);
        throw new UserConstraints(formated);
      }
      throw new InternalRepository(error);
    }
  }

  async update(client: client) {
    const clientKeys = Object.keys(client);
    for (let i = 0; i < clientKeys.length; i++) {
      // @ts-ignore
      await this.interface.update({ [clientKeys[i]]: client[clientKeys[i]] }, { where: client.id });
    }
  }

  async remove(id: string) {
    try {
      const deleted = await this.interface.destroy({ where: { id: id } });
      return Boolean(deleted);
    } catch (error) {
      throw new InternalRepository(error);
    }
  }
}
