import { Router } from 'express';
import { RequestHandler, RequestParamHandler, PathParams } from 'express-serve-static-core';

interface automobile {
  id?: string;
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
  id: string;
  username: string;
  password: string;
  email: string;
}

interface client extends user {
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
  manifesto(): typeof Router;
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
