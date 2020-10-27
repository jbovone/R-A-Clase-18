//@ts-nocheck
import { Router } from 'express';
import { automobileService, baseController } from '../../types';
import { Request, Response } from 'express-serve-static-core';

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
    this.provider.post('/new', this.create.bind(this));
    this.provider.post(`/delete/:id`, this.remove.bind(this));
    this.provider.get(`/all`, this.getAll.bind(this));
    this.provider.get(`/:id`, this.getById.bind(this));
    this.provider.get(`/:filters`, this.getByfilters.bind(this));
    this.provider.put(`/:id/`, this.updateCar.bind(this));
    return this.provider;
  }
  async create({ body, session }: Request, response: Response) {
    const cat = session!.userCat;
    if (cat) {
      try {
        session!.userCat = await this.service.create(body);
        response.sendStatus(202);
      } catch {
        response.sendStatus(500);
      }
    } else {
      response.sendStatus(404);
    }
  }

  async remove({ params, session }: Request, response: Response) {
    const cat = session!.userCat;
    if (!isNaN(params as any) && cat && !isNaN(cat)) {
      try {
        const re = await this.service.remove(Number(params), cat);
        response.sendStatus(200);
      } catch {
        response.sendStatus(500);
      }
    } else {
      response.sendStatus(404);
    }
  }
  async getById() {}
  async emailVerify() {}
  async authorization({ body, session }: Request, response: Response) {}
  async getAll({ body, session }: Request, response: Response) {}
  async completeRegistration() {}
  async getByfilters() {}
  async updateCar() {}
}

export default AutomobileController;
