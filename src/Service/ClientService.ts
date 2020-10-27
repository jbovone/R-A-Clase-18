import { category, clientsService, user, ID, client, clientsRepository } from '../../types';
import * as userTypes from '../Invariances/userCategories';

class ClientService implements clientsService {
  clientsRepository: clientsRepository;
  constructor(clientsRepository: clientsRepository) {
    this.clientsRepository = clientsRepository;
  }

  async create(user: user) {
    const { USERS_ACCESS } = userTypes;
    try {
      user.category = USERS_ACCESS;
      const userCreated = await this.clientsRepository.create(user);
      return userCreated.category;
    } catch {
      throw new Error('');
    }
  }

  async getAll(cat: category) {
    const { MANAGEMENT_ACCESS } = userTypes;
    if (cat >= MANAGEMENT_ACCESS) {
      try {
        const allClients = await this.clientsRepository.getAll();
        return allClients;
      } catch (error) {
        throw new Error('');
      }
    }
    return false;
  }

  async getById(id: ID, auth: category) {
    const { MANAGEMENT_ACCESS } = userTypes;
    try {
      if (auth >= MANAGEMENT_ACCESS) {
        const client = await this.clientsRepository.getById(id);
        return client;
      } else {
        return false;
      }
    } catch (error) {
      throw new Error('');
    }
  }

  async getByfilters(filter: string, auth: category) {
    const { MANAGEMENT_ACCESS } = userTypes;
    try {
      if (auth >= MANAGEMENT_ACCESS) {
        return await this.clientsRepository.getByfilters(filter);
      } else {
        return false;
      }
    } catch (error) {
      throw new Error('');
    }
  }

  async remove(id: ID, access: category) {
    const { ADMINISTRATIVE_ACCESS } = userTypes;
    try {
      if (access === ADMINISTRATIVE_ACCESS) {
        const erased = await this.clientsRepository.remove(id);
        console.log(erased, 'ERASED');
        return erased;
      } else {
        return false; //an extra undefined status can be defined here.
      }
    } catch (error) {
      throw new Error('');
    }
  }

  async emailVerify(id: ID, code: string) {
    /**TODO it needs a running EMAIL server to do something */
    return true;
  }

  async completeRegistration(client: client, category: category) {
    const { USERS_ACCESS } = userTypes;
    try {
      if (category === USERS_ACCESS) {
        await this.clientsRepository.create(client);
        return true;
      }
      return false;
    } catch (error) {
      throw new Error('');
    }
  }

  async authorization(username: string, password: string) {
    try {
      const { id, category } = await this.clientsRepository.getByUserAndPassword(username, password);

      if (id) return category;
      return false;
    } catch (error) {
      throw new Error('');
    }
  }

  async accessUpdate(id: ID, category: Number, auth: Number) {
    const { ADMINISTRATIVE_ACCESS } = userTypes;
    try {
      if (auth === ADMINISTRATIVE_ACCESS) {
        const success = await this.clientsRepository.update('category', category, id);
        console.log(success, 'SUCCESS');
        return success;
      } else {
        return false;
      }
    } catch (error) {
      throw new Error('');
    }
  }
}

export default ClientService;
