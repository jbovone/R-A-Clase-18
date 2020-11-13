import { category, clientsService, user, ID, client, clientsRepository } from '../../types';
import * as userTypes from '../Invariances/userCategories';
import UserConstraints from '../Exeptions/ValidationConstraints';
import AccessDenied from '../Exeptions/AccessDenied';
import UndefinedUser from '../Exeptions/UndefinedUser';

class ClientService implements clientsService {
  clientsRepository: clientsRepository;
  constructor(clientsRepository: clientsRepository) {
    this.clientsRepository = clientsRepository;
  }

  async create(user: user) {
    const { USERS_ACCESS } = userTypes;
    try {
      user.category = USERS_ACCESS;
      const newUser = await this.clientsRepository.create(user);
      return newUser;
    } catch (error) {
      if (error instanceof UserConstraints) throw error;
      throw new Error('Client Service Unhandled');
    }
  }

  async getAll(cat: category = 1) {
    const { MANAGEMENT_ACCESS } = userTypes;

    if (cat < MANAGEMENT_ACCESS) {
      throw new AccessDenied('Forbidden');
    }

    try {
      const allClients = await this.clientsRepository.getAll();
      return allClients;
    } catch (error) {
      throw new Error('Client Service Unhandled');
    }
  }

  async getById(id: ID, auth: category, sessionID: ID) {
    const { MANAGEMENT_ACCESS } = userTypes;
    const isOwnAccountQuery = sessionID === id;
    try {
      if (auth >= MANAGEMENT_ACCESS || isOwnAccountQuery) {
        const client = await this.clientsRepository.getById(id);
        return client;
      }
      throw new AccessDenied('Forbidden');
    } catch (error) {
      throw new Error('Client Service Unhandled');
    }
  }

  async getByfilters(filter: string, auth: category) {
    const { MANAGEMENT_ACCESS } = userTypes;
    try {
      if (auth >= MANAGEMENT_ACCESS) {
        return await this.clientsRepository.getByfilters(filter);
      } else {
        throw new AccessDenied('Forbidden');
      }
    } catch (error) {
      throw new Error('Client Service Unhandled');
    }
  }

  async remove(id: ID, access: category) {
    const { ADMINISTRATIVE_ACCESS } = userTypes;
    try {
      if (access === ADMINISTRATIVE_ACCESS) {
        const erased = await this.clientsRepository.remove(id);
        return erased;
      } else {
        throw new AccessDenied('Forbidden');
      }
    } catch (error) {
      throw new Error('Client Service Unhandled');
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
        await this.clientsRepository.update(client);
        return true;
      }
      throw new AccessDenied('Forbidden');
    } catch (error) {
      throw new Error('Client Service Unhandled');
    }
  }

  async authorization(username: string, password: string) {
    try {
      const client = await this.clientsRepository.getByUserAndPassword(username, password);
      if (!client) {
        throw new UndefinedUser('user not found');
      }
      return client;
    } catch (error) {
      if (error instanceof UndefinedUser) throw error;
      throw new Error('Client Service Unhandled');
    }
  }

  async accessUpdate(id: ID, category: category, auth: category) {
    const { ADMINISTRATIVE_ACCESS } = userTypes;
    try {
      if (auth === ADMINISTRATIVE_ACCESS) {
        const success = await this.clientsRepository.update({ category, id } as client);
        return success;
      } else {
        throw new AccessDenied('Forbidden');
      }
    } catch (error) {
      throw new Error('Client Service Unhandled');
    }
  }
}

export default ClientService;
