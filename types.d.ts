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
  password: string;
  category: category;
}

interface client {
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

interface booking {
  id: string;
  userId: string;
  carId: string;
  expires: string;
  fromTime: string;
  toTime: string;
  paid: number;
  priceDay: number;
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
  create: (automobile: automobile) => Promise<automobile>;
  getById: (id: ID) => Promise<automobile>;
  getAll: () => Promise<automobile[]>;
  getByfilters: (params: string) => Promise<automobile[]>;
  updateCar: (autmobile: automobile) => Promise<boolean>;
}

interface bookingsService extends baseService {
  transactionsRepository: repository;
  create: (user: transaction) => boolean;
  getById: (id: ID) => transaction;
  getAll: () => transaction[];
  extendContract: (date: number) => boolean;
}

interface clientsService extends baseService {
  clientsRepository: clientsRepository;
  create: (user: user) => Promise<user>;
  getById: (id: ID, auth: category, sessionID: ID) => Promise<user | client>;
  getByfilters(filter: string, auth: category): any;
  getAll: (cat: category) => Promise<user[] | client[]>;
  authorization: (username: string, password: string) => Promise<user>;
  emailVerify: (id: ID, code: string) => Promise<boolean>;
  completeRegistration: (client: client, category: category) => Promise<boolean>;
  accessUpdate: (id: ID, category: category, auth: category) => Promise<boolean>;
}

interface clientsRepository {
  getByUserAndPassword(username: string, password: string): Promise<user>;
  getAll(): Promise<user[] | client[]>;
  getById(id: ID): Promise<user | client>;
  getByfilters(filter: string): Promise<user[] | client[] | boolean>;
  create(item: user): Promise<user>;
  remove(item: number): Promise<boolean>;
  update(client: client): Promise<boolean>;
}

type userValidation = ['username'?, 'email'?];
interface userConstraints {
  username?: string;
  email?: string;
}
