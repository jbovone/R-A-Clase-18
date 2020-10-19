import { Router } from 'express';
import { automobileService } from '../Model/types';

export default class AutomobileController {
  provider;
  service;
  base;
  constructor(router: Router, service: automobileService) {
    this.base = '/automobile';
    this.provider = router;
    this.service = service;
  }
  manifesto() {
    this.provider.post('/new', this.service.create.bind(this));
    this.provider.post(`/delete/:id`, this.service.remove.bind(this));
    this.provider.get(`/all`, this.service.getAll.bind(this));
    this.provider.get(`/:id`, this.service.getById.bind(this));
    this.provider.get(`/:filters`, this.service.getByfilters.bind(this));
    this.provider.put(`/:id/`, this.service.updateCar.bind(this));
    return this.provider;
  }
}
