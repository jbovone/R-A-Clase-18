import DIContainer, { object, get, factory } from 'rsdi';
import ApiService from './Services/AutomovileService';
import ServerProvider from './Controller/Provider/ServerProvider';
import AutomovilleController from './Controller/AutomovileController';
import Client from './Model/Client';
import Automovile from './Model/Automovile';
import * as v1 from 'uuid';
const express = require('express');
import cors from 'cors';

const program = new DIContainer();
const server = new ServerProvider(express, cors).create(4000);
server.get('/', () => console.log('working'));

program.addDefinitions({
  AutomovilleController: object(AutomovilleController).construct(
    get('ApiService'),
    get('server'),
    get('Automovile')
  ),
  ClientsController: object(AutomovilleController).construct(
    get('ApiService'),
    get('server'),
    get('Client')
  ),
});

export default program;
