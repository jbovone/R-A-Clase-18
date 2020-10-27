import { Router } from 'express';
import { category, clientsService } from '../../types';
import { Request, Response } from 'express-serve-static-core';
import { isUserValid, isUsernameValid, isPasswordValid } from '../Validation/validate';
import { Console } from 'console';

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
    this.provider.post('/new', this.create.bind(this));
    this.provider.post(`/delete/:id`, this.remove.bind(this));
    this.provider.post(`/auth`, this.login.bind(this));
    this.provider.post(`/logout`, this.logout.bind(this));
    this.provider.get(`/all`, this.getAll.bind(this));
    this.provider.get(`/:id`, this.getById.bind(this));
    this.provider.get(`/:filters`, this.getByfilters.bind(this));
    this.provider.put(`/email-verification/:id/:code/`, this.emailVerify.bind(this));
    this.provider.put(`/complete-registration/:id/`, this.completeRegistration.bind(this));
    this.provider.put(`/access-update/:id/:category/`, this.accessUpdate.bind(this));
    return this.provider;
  }

  async create({ body, session }: Request, response: Response) {
    const cat = session!.userCategory;
    if (cat) return response.sendStatus(403);
    if (isUserValid(body)) {
      try {
        session!.userCategory = await this.service.create(body);
        response.sendStatus(202);
      } catch {
        response.sendStatus(500);
      }
    } else {
      response.sendStatus(400);
    }
  }

  async remove({ params, session }: Request, response: Response) {
    const { id } = params;
    let cat: any = session!.userCategory;
    if (parseInt(id) === NaN || parseInt(cat) === NaN) {
      return response.sendStatus(400);
    }

    try {
      const success = await this.service.remove(parseInt(id), parseInt(cat));
      success ? response.sendStatus(200) : response.sendStatus(404);
    } catch {
      response.sendStatus(500);
    }
  }

  async getById({ params, session }: Request, response: Response) {
    const { id } = params;
    const cat = session!.userCategory;
    if (parseInt(cat) === NaN) {
      return response.sendStatus(400);
    }
    try {
      const client = await this.service.getById(parseInt(id), parseInt(cat));
      client ? response.send(client) : response.sendStatus(403);
    } catch (error) {
      response.sendStatus(500);
    }
  }

  async getAll({ session }: Request, response: Response) {
    const cat = session!.userCategory;
    if (parseInt(cat) === NaN) {
      return response.sendStatus(400);
    }
    try {
      const clients = await this.service.getAll(cat);
      clients ? response.send(clients) : response.sendStatus(403);
    } catch (error) {
      response.sendStatus(500);
    }
  }

  async login({ body, session }: Request, response: Response) {
    const { username, password } = body;
    if (session!.userCategory) return response.sendStatus(403);
    if (isUsernameValid(username) && isPasswordValid(password)) {
      try {
        const cat = await this.service.authorization(username, password);
        if (cat) {
          session!.userCategory = cat;
          response.sendStatus(200);
        }
        response.sendStatus(404);
      } catch (error) {
        response.sendStatus(500);
      }
    }
  }

  async logout({ session }: Request, response: Response) {
    try {
      if (session!.userCategory) {
        session?.destroy(error => {
          throw new Error(error);
        });
        response.sendStatus(200);
      }
      response.sendStatus(400);
    } catch (error) {
      response.sendStatus(500);
    }
  }

  async completeRegistration({ body, session }: Request, response: Response) {
    const cat = session!.userCategory;
    if (parseInt(cat) === NaN) {
      return response.sendStatus(400);
    }
    try {
      const clients = await this.service.getAll(cat);
      clients ? response.send(clients) : response.sendStatus(403);
    } catch (error) {
      response.sendStatus(500);
    }
  }

  async emailVerify() {} //TODO

  async getByfilters({ session, body }: Request, response: Response) {
    const { filters } = body;

    if (typeof filters !== 'string') response.sendStatus(400);

    let cat = session!.userCategory;
    if (!cat) return response.sendStatus(400);
    try {
      const items = await this.service.getByfilters(cat, filters);
      response.send(items);
    } catch (error) {
      response.sendStatus(500);
    }
  }
  async accessUpdate({ body, session }: Request, response: Response) {
    const { id, category } = body;
    const auth = session!.userCategory;
    if (parseInt(auth) === NaN || parseInt(id) === NaN || parseInt(category) === NaN) {
      return response.sendStatus(400);
    }
    try {
      await this.service.accessUpdate(Number(id), Number(category), parseInt(auth));
    } catch (error) {
      response.sendStatus(500);
    }
  }
}
