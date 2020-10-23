import dotenv from 'dotenv';
dotenv.config();

import DIContainer, { object, get } from 'rsdi';
import ServerProvider from './Controller/Provider/ServerProvider';
import { Router } from 'express';

import { Sequelize } from 'sequelize';
import repositoryConfig from './Repository/configuration/main_db.conf';
import ViewController from './Controller/ViewController';

import AutomobileController from './Controller/AutomobileController';
import AutomobileService from './Service/AutomobileService';
import AutomobileRepository from './Repository/AutomobileRepository';
import AutomobileModel from './Repository/model/AutomobilesModel';
import Automovile from './Model/Automovile';

import ClientsController from './Controller/ClientsController';
import ClientService from './Service/ClientService';
import ClientsRepository from './Repository/ClientsRepository';
import ClientsModel from './Repository/model/ClientsModel';
import Client from './Model/Client';

import TransactionsController from './Controller/TransactionsController';
import TransactionsService from './Service/TransactionService';
import TransactionsRepository from './Repository/TransactionsRepository';
import TransactionsModel from './Repository/model/TransactionsModel';
import Transaction from './Model/Transaction';

const program = new DIContainer();
const sequelize = new Sequelize(repositoryConfig);

const definitions = {
  Server: object(ServerProvider).construct(
    get('ClientsController'),
    get('AutomobileController'),
    get('TransactionsController'),
    get('ViewController')
  ),

  ViewController: object(ViewController).construct(Router()),

  AutomobileController: object(AutomobileController).construct(Router(), get('AutomobileService')),
  AutomobileService: object(AutomobileService).construct(Automovile, get('AutomobileRepository')),
  AutomobileRepository: object(AutomobileRepository).construct(AutomobileModel),

  ClientsController: object(ClientsController).construct(Router(), get('ClientsService')),
  ClientsService: object(ClientService).construct(Client, get('ClientsRepository')),
  ClientsRepository: object(ClientsRepository).construct(ClientsModel),

  TransactionsController: object(TransactionsController).construct(Router(), get('TransactionService')),
  TransactionService: object(TransactionsService).construct(Transaction, get('TransactionsRepository')),
  TransactionsRepository: object(TransactionsRepository).construct(TransactionsModel),

  //SessionDatabase: object(Sequelize).construct(), TODO
};

(async () => {
  try {
    AutomobileModel.setup(sequelize);
    ClientsModel.setup(sequelize);
    TransactionsModel.setup(sequelize);
    await Promise.all([AutomobileModel.sync(), ClientsModel.sync(), TransactionsModel.sync()]);

    program.addDefinitions(definitions);
    program.get('Server');
  } catch (error) {
    console.log(error);
  }
})();
