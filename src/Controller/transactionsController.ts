import { Router } from 'express';
import { transactionsService } from '../Model/types';

export default class ClientController {
  provider;
  service;
  base;
  constructor(router: Router, service: transactionsService) {
    this.base = '/transactions';
    this.provider = router;
    this.service = service;
  }
  manifesto() {
    this.provider.post('/new/:id/:unit', this.service.create.bind(this));
    this.provider.post(`/delete/:id`, this.service.remove.bind(this));
    this.provider.get(`/all`, this.service.getAll.bind(this));
    this.provider.get(`/:id`, this.service.getById.bind(this));
    this.provider.get(`/:filters`, this.service.getByfilters.bind(this));
    this.provider.put(`/:id`, this.service.extendContract.bind(this));
    return this.provider;
  }
}
