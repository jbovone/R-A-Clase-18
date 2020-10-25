import { Router } from 'express';
import { clientsService } from '../../types';

export default class ClientController {
  provider;
  service;
  base;
  constructor(router: Router, service: clientsService) {
    this.base = '/clients';
    this.provider = router;
    this.service = service;
  }
  manifesto() {
    this.provider.post('/new', this.service.create.bind(this.service));
    this.provider.post(`/delete/:id`, this.service.remove.bind(this.service));
    this.provider.post(`/login`, this.service.login.bind(this.service));
    this.provider.get(`/all`, this.service.getAll.bind(this.service));
    this.provider.get(`/:id`, this.service.getById.bind(this.service));
    this.provider.get(`/:filters`, this.service.getByfilters.bind(this.service));
    this.provider.put(`/email-verification/:id/:code/`, this.service.emailVerify.bind(this.service));
    this.provider.put(`/complete-registration/:id/`, this.service.completeRegistration.bind(this.service));

    return this.provider;
  }
}
