import { Router } from 'express';
import { automobileService, baseController } from '../../types';

class AutomobileController implements baseController {
  provider;
  service;
  base;
  constructor(router: Router, service: automobileService) {
    this.base = '/automobile';
    this.provider = router;
    this.service = service;
  }
  manifesto() {
    this.provider.post('/new', this.service.create.bind(this.service));
    this.provider.post(`/delete/:id`, this.service.remove.bind(this.service));
    this.provider.get(`/all`, this.service.getAll.bind(this.service));
    this.provider.get(`/:id`, this.service.getById.bind(this.service));
    this.provider.get(`/:filters`, this.service.getByfilters.bind(this.service));
    this.provider.put(`/:id/`, this.service.updateCar.bind(this.service));
    return this.provider;
  }
}

export default AutomobileController;
