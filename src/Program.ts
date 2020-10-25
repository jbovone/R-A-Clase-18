import dotenv from 'dotenv';
dotenv.config();

import DIContainer, { object, get, factory } from 'rsdi';
import { Factory } from 'rsdi/definitions/FactoryDefinition';
import ServerProvider from './Controller/Provider/ServerProvider';
import { Router } from 'express';

import ViewController from './Controller/ViewController';

import AutomobileController from './Controller/AutomobileController';
import AutomobileService from './Service/AutomobileService';
import AutomobileRepository from './Repository/AutomobileRepository';
import AutomobilesModel from './Repository/model/AutomobilesModel';
import Automobile from './Entities/Automobile';

import ClientsController from './Controller/ClientsController';
import ClientService from './Service/ClientService';
import ClientsRepository from './Repository/ClientsRepository';
import ClientsModel from './Repository/model/ClientsModel';
//import Client from './Entities/Client';

import TransactionsController from './Controller/TransactionsController';
import TransactionsService from './Service/TransactionService';
import TransactionsRepository from './Repository/TransactionsRepository';
import TransactionsModel from './Repository/model/TransactionsModel';
import Transaction from './Entities/Transaction';

import addDatabaseDefinitions from './Repository/configuration/common';
import { Sequelize } from 'sequelize/types';

const program = new DIContainer();

const definitions = {
  Server: object(ServerProvider).construct(
    get('ClientsController'),
    get('AutomobileController'),
    get('TransactionsController'),
    get('ViewController')
  ),

  ViewController: object(ViewController).construct(Router()),

  AutomobileController: object(AutomobileController).construct(Router(), get('AutomobileService')),
  AutomobileService: object(AutomobileService).construct(get('AutomobileRepository')),
  AutomobileRepository: object(AutomobileRepository).construct(get('AutomobilesModel'), Automobile),
  AutomobilesModel: factory(configureAutomobilesModel as Factory),

  ClientsController: object(ClientsController).construct(Router(), get('ClientsService')),
  ClientsService: object(ClientService).construct(get('ClientsRepository')),
  ClientsRepository: object(ClientsRepository).construct(get('ClientsModel')),
  ClientsModel: factory(configureTransactionsModel as Factory),

  TransactionsController: object(TransactionsController).construct(Router(), get('TransactionService')),
  TransactionService: object(TransactionsService).construct(get('TransactionsRepository')),
  TransactionsRepository: object(TransactionsRepository).construct(get('TransactionsModel')),
  TransactionsModel: factory(configureClientsModel as Factory),
};

function configureAutomobilesModel(container: DIContainer) {
  return AutomobilesModel.setup(container.get('MainDB'));
}
function configureTransactionsModel(container: DIContainer) {
  return ClientsModel.setup(container.get('MainDB'));
}
function configureClientsModel(container: DIContainer) {
  return TransactionsModel.setup(container.get('MainDB'));
}

(async () => {
  try {
    program.addDefinitions(definitions);

    addDatabaseDefinitions(program);

    program.get<Sequelize>('MainDB').sync();

    program.get('Server');
  } catch (error) {
    console.log(error);
  }
})();
