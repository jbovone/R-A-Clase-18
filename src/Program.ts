import dotenv from 'dotenv';
import DIContainer, { object, get, factory } from 'rsdi';
import { Router } from 'express';
import ApiService from './Services/AutomovileService';
import './Controller/Provider/serverProvider';

import AutomovilleController from './Controller/automobileController';
import ClientsController from './Controller/clientsController';

import Client from './Model/Client';
import Automovile from './Model/Automovile';

import TransactionsRepository from './Repository/models/TransactionsRepository';
import ServerProvider from './Controller/Provider/serverProvider';

dotenv.config();
const program = new DIContainer();

/*
program.addDefinitions({
  ServerProvider: object(ServerProvider).construct([
    get('AutomovileController'),
    get('ClientController'),
  ]),
});
*/
export default program;
