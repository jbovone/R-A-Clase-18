import { Router } from 'express';
import { transactionsService } from '../../types';

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
    this.provider.post('/new/:id/:unit', this.service.create.bind(this.service));
    this.provider.post(`/delete/:id`, this.service.remove.bind(this.service));
    this.provider.get(`/all`, this.service.getAll.bind(this.service));
    this.provider.get(`/:id`, this.service.getById.bind(this.service));
    this.provider.get(`/:filters`, this.service.getByfilters.bind(this.service));
    this.provider.put(`/:id`, this.service.extendContract.bind(this.service));
    return this.provider;
  }
}
