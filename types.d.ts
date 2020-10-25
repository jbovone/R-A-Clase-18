import { Router, Response } from 'express';
import {
  RequestHandler,
  PathParams,
  RequestParamHandler,
  Request,
  ParamsDictionary,
} from 'express-serve-static-core';

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
  username: string;
  password: string;
  email: string;
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
  isAdmin: boolean;
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

interface ServiceBase {
  remove: RequestHandler;
  create: RequestHandler;
  getById: RequestHandler;
  getAll: RequestHandler;
  getByfilters: RequestHandler;
}

interface clientsService extends ServiceBase {
  login: RequestHandler;
  emailVerify: RequestHandler;
  completeRegistration: RequestHandler;
}

interface automobileService extends ServiceBase {
  updateCar: RequestHandler;
}
interface transactionsService extends ServiceBase {
  extendContract: RequestHandler;
}

interface RepositoryBase {
  getAll();
  getById(id: string);
  getByfilters(filters: string);
  create(automobile: automobile);
  remove(id: string);
}

interface Dispatch extends Response {}
interface Event extends any {}
