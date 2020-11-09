import express from 'express';
import cors from 'cors';
import { baseController as module } from '../../../types';
import Session from './sessionsProvider';

class ServerProvider {
  service: typeof express.application;
  constructor(session: any, clients: module, automobile: module, transactions: module, view: module) {
    this.service = express();
    this.service.use(cors());
    this.service.use(express.json());
    this.service.use(session.generate());
    this.service.use(clients.base, clients.manifesto());
    this.service.use(automobile.base, automobile.manifesto());
    this.service.use(transactions.base, transactions.manifesto());
    this.service.use(view.base, view.manifesto());
    this.service.listen(process.env.PORT || 3000, () => console.log('serving 3000'));
  }
}

export default ServerProvider;
