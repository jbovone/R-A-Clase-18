import { client } from '../Model/Client';
import ClientsModel from './model/ClientsModel';

export default class ClientsRepository {
  interface;
  constructor(ClientModel: typeof ClientsModel) {
    this.interface = ClientModel;
  }

  async getAll() {
    const clients = await this.interface.findAll();
    return clients;
  }

  async getById(id: string) {
    const client = await this.interface.findOne({
      where: { id },
    });

    return client;
  }

  async getByfilters(filters: string) {
    const clients = await this.interface.findAll({
      where: {
        id: filters,
        name: filters,
      },
    });
    return clients;
  }

  async create(client: client) {
    let newClient;
    const buildOptions = { isNewRecord: !client.id, include: this.interface };
    newClient = this.interface.build(newClient, buildOptions);
    try {
      newClient = await newClient.save();
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
