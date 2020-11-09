//@ts-nocheck
import { Router } from 'express';
import { automobileService, baseController } from '../../types';
import { Request, Response } from 'express-serve-static-core';
import { isAutomobileValid } from '../Validation/validate';
import AccessDenied from '../Exeptions/AccessDenied';

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
    if (cat && isAutomobileValid(body)) {
      try {
        session!.userCat = await this.service.create(body);
        response.sendStatus(202);
      } catch (error) {
        if (error instanceof AccessDenied) response.sendStatus(403);
        response.sendStatus(500);
      }
    } else {
      response.sendStatus(400);
    }
  }

  async remove({ params, session }: Request, response: Response) {
    const cat: number | undefined = session!.userCategory;
    const { id } = params;
    if (!cat) return response.sendStatus(403);

    try {
      const success = await this.service.remove(parseInt(id), cat);
      success ? response.sendStatus(200) : response.sendStatus(404);
    } catch {
      response.sendStatus(500);
    }
  }
  async getById({ params, session }: Request, response: Response) {
    const cat: number | undefined = session!.userCategory;
    const { id } = params;
    if (!cat) return response.sendStatus(403);

    try {
      const success = await this.service.getById(parseInt(id), cat);
      success ? response.sendStatus(200) : response.sendStatus(404);
    } catch {
      response.sendStatus(500);
    }
  }
  async getAll(_: Request, response: Response) {
    try {
      const automobiles = await this.service.getAll();
      console.log(automobiles, 'AUTOMOBILES');
      automobiles ? response.send(automobiles) : response.sendStatus(403);
    } catch (error) {
      response.sendStatus(500);
    }
  }
  async getByfilters({ body, session }: Request, response: Response) {}
  async updateCar({ body, session }: Request, response: Response) {}
}

export default AutomobileController;
