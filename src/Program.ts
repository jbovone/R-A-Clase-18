import dotenv from 'dotenv';
dotenv.config();

import DIContainer, { object, get, factory } from 'rsdi';
import { Factory } from 'rsdi/definitions/FactoryDefinition';
import ServerProvider from './Controller/Provider/ServerProvider';
import { Router } from 'express';
import Session from './Controller/Provider/sessionsProvider';
import { populateDatabase } from '../utils/DBInitialState';
import ViewController from './Controller/ViewController';
import createAdmin from './Repository/configuration/createAdmin';

import AutomobileController from './Controller/AutomobileController';
import AutomobileService from './Service/AutomobileService';
import AutomobileRepository from './Repository/AutomobileRepository';
import AutomobilesModel from './Repository/model/AutomobilesModel';
import Automobile from './Entities/Automobile';

import ClientsController from './Controller/ClientsController';
import ClientService from './Service/ClientService';
import ClientsRepository from './Repository/ClientsRepository';
import ClientsModel from './Repository/model/ClientsModel';
import Client from './Entities/Client';

import BookingsController from './Controller/BookingsController';
import BookingsService from './Service/BookingsService';
import BookingsRepository from './Repository/BookingsRepository';
import BookingsModel from './Repository/model/BookingsModel';
import Transaction from './Entities/Transaction';

import addDatabaseDefinitions from './Repository/configuration/common';
import { Sequelize } from 'sequelize/types';

const program = new DIContainer();

const definitions = {
  Server: object(ServerProvider).construct(
    get('Session'),
    get('ClientsController'),
    get('AutomobileController'),
    get('BookingsController'),
    get('ViewController')
  ),

  Session: object(Session).construct(get('SessionDB')),

  ViewController: object(ViewController).construct(Router()),

  AutomobileController: object(AutomobileController).construct(Router(), get('AutomobileService')),
  AutomobileService: object(AutomobileService).construct(get('AutomobileRepository')),
  AutomobileRepository: object(AutomobileRepository).construct(get('AutomobilesModel'), Automobile),
  AutomobilesModel: factory(configureAutomobilesModel as Factory),

  ClientsController: object(ClientsController).construct(Router(), get('ClientsService')),
  ClientsService: object(ClientService).construct(get('ClientsRepository')),
  ClientsRepository: object(ClientsRepository).construct(get('ClientsModel')),
  ClientsModel: factory(configureClientsModel as Factory),

  BookingsController: object(BookingsController).construct(Router(), get('BookingService')),
  BookingService: object(BookingsService).construct(get('BookingsRepository')),
  BookingsRepository: object(BookingsRepository).construct(get('BookingsModel')),
  BookingsModel: factory(configureBookingsModel as Factory),
};

function configureAutomobilesModel(container: DIContainer) {
  return AutomobilesModel.setup(container.get('MainDB'));
}
function configureClientsModel(container: DIContainer) {
  return ClientsModel.setup(container.get('MainDB'));
}
function configureBookingsModel(container: DIContainer) {
  return BookingsModel.setup(container.get('MainDB'));
}

(async () => {
  try {
    addDatabaseDefinitions(program);
    program.addDefinitions(definitions);
    program
      .get<Sequelize>('MainDB')
      .sync()
      .then(() => {
        createAdmin(program);
        process.env.node_env === 'development' && populateDatabase(program);
      });
    program.get<Sequelize>('SessionDB').sync();
    program.get('Server');
  } catch (error) {
    console.log(error);
  }
})();
