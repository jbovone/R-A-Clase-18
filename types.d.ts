import { Router, Response } from 'express';
import {
  RequestHandler,
  PathParams,
  RequestParamHandler,
  Request,
  ParamsDictionary,
} from 'express-serve-static-core';
import { Session } from '@types/express-session';
import session from 'express-session';
import ClientsRepository from './src/Repository/ClientsRepository';

type ID = number;
type category = number;
type ICLient = keyof client;

interface automobile {
  id?: number;
  brand: string;
  model: string;
  year: number;
  miles: number;
  color: string;
  passengers: number;
  gears: string;
  status: string;
}

interface user {
  id?: number;
  username: string;
  email: string;
  emailVerified: boolean;
  password: string;
  category: category;
}

interface client extends user {
  id: number;
  firstName: string;
  lastName: string;
  documentType: string;
  documentNumber: string;
  address: string;
  telephone: number;
  bornDate: string;
  category: category;
}

interface transaction {
  id: string;
  userId: string;
  carId: string;
  expires: string;
  fromTime: string;
  toTime: string;
  paid: number;
  totalPrice: number;
  alive: boolean;
}

interface baseController {
  manifesto(): Router;
  provider: Router;
  base: PathParams;
}

/**   service layer      */

interface baseService {
  remove: (id: ID, access: category) => Promise<boolean>;
}

interface automobileService extends baseService {
  automobileRepository: repository;
  create: (user: user) => boolean;
  getById: (id: ID) => automobile;
  getAll: () => user[] | automobile[];
  getByfilters: (params: string) => automobile[];
  updateCar: (autmobile: automobile) => boolean;
}

interface transactionsService extends baseService {
  transactionsRepository: repository;
  create: (user: transaction) => boolean;
  getById: (id: ID) => transaction;
  getAll: () => transaction[];
  extendContract: (date: number) => boolean;
}

interface validation {
  fields: string[];
}
interface clientsService extends baseService {
  clientsRepository: clientsRepository;
  create: (user: user) => Promise<user | validation>;
  getById: (id: ID, auth: category) => Promise<user | false>;
  getByfilters(filter: string, auth: category): any;
  getAll: (cat: category) => Promise<user[] | false>;
  authorization: (username: string, password: string) => Promise<category | false>;
  emailVerify: (id: ID, code: string) => Promise<boolean>;
  completeRegistration: (client: client, category: category) => Promise<boolean>;
  accessUpdate: (id: ID, category: Number, auth: Number) => Promise<boolean>;
}

/** repository layer */

interface clientsRepository {
  getByUserAndPassword(username: string, password: string): Promise<user>;
  getAll(): Promise<user[] | client[]>;
  getById(id: ID): Promise<user | client>;
  getByfilters(filter: string): Promise<user[] | client[] | boolean>;
  create(item: user): Promise<user | validation>;
  remove(item: number): Promise<boolean>;
  update(item: ICLient, data: any, where: ID): Promise<boolean>;
}
/**
 * TODO find a better way to handle this, the returns in the service layer
 * ain't the same, but bastly correlated que the ones in the repository,
 */
