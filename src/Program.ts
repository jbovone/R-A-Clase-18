import dotenv from 'dotenv';
dotenv.config();

import DIContainer, { object, get, factory } from 'rsdi';
import { Router } from 'express';

import { Sequelize } from 'sequelize';
import repositoryConfig from './Repository/configuration/main_db.conf';

import AutomobileService from './Services/AutomobileService';
import AutomobileController from './Controller/AutomobileController';
import AutomovileModel from './Repository/models/AutomovileModel';
import Automovile from './Model/Automovile';

import ServerProvider from './Controller/Provider/serverProvider';

import ClientsController from './Controller/ClientsController';
import ClientService from './Services/ClientService';
import ClientModel from './Repository/models/ClientModel';
import Client from './Model/Client';

import TransactionsController from './Controller/TransactionsController';
import TransactionsService from './Services/TransactionService';
import TransactionsRepository from './Repository/models/TransactionsModel';

const program = new DIContainer();

program.addDefinitions({
  Server: object(ServerProvider).construct(
    get('ClientsController'),
    get('AutomobileController'),
    get('TransactionsController')
  ),
  AutomobileController: object(AutomobileController).construct(Router(), get('AutomovileService')),
  AutomovileService: object(AutomobileService).construct(),
  ClientsController: object(ClientsController).construct(Router(), get('ClientService')),
  ClientService: object(ClientService).construct(),
  TransactionsController: object(TransactionsController).construct(Router(), get('TransactionService')),
  TransactionService: object(TransactionsService).construct(),
  Database: object(Sequelize).construct(repositoryConfig),
  //SessionDatabase: object(Sequelize).construct(),
});
program.get('Server');
program.get('Database');

//const db = new Sequelize('mysql');

console.log(process.env.DB_PATH);
