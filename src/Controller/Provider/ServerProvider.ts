import express from 'express';
import cors from 'cors';
import { baseController as module } from '../../../types';

class ServerProvider {
  service: typeof express.application;
  constructor(clients: module, automobile: module, transactions: module, view: module) {
    this.service = express();
    this.service.use(cors());
    this.service.use(clients.base, clients.manifesto());
    this.service.use(automobile.base, automobile.manifesto());
    this.service.use(transactions.base, transactions.manifesto());
    this.service.use(view.base, view.manifesto());
    this.service.listen(process.env.PORT || 4000, () => console.log('serving 4000'));
  }
}

export default ServerProvider;
