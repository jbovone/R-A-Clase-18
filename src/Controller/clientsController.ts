import { Router } from 'express';
import { clientsService } from '../../types';
import { Request, Response } from 'express-serve-static-core';
import { isUserValid, isUsernameValid, isPasswordValid, isSearchValid } from '../Validation/validate';
import UserConstraints from '../Exeptions/ValidationConstraints';
import LoginData from './DTOs/LoginSuccess';
import AccessDenied from '../Exeptions/AccessDenied';
import UndefinedUser from '../Exeptions/UndefinedUser';

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
    const cat: number | undefined = session!.user.category;
    if (cat) return response.sendStatus(403);

    if (isUserValid(body)) {
      try {
        const user = await this.service.create(body);
        session!.user = new LoginData(user);
        response.status(202).send(new LoginData(user));
      } catch (error) {
        if (error instanceof UserConstraints) {
          return response.status(403).send(JSON.stringify(error));
        }
        response.sendStatus(500);
      }
    } else {
      response.sendStatus(400);
    }
  }

  async getAll({ session }: Request, response: Response) {
    const cat = session!.user.category;
    if (!cat) return response.sendStatus(403);

    try {
      const clients = await this.service.getAll(cat);
      return response.send(clients);
    } catch (error) {
      if (error instanceof AccessDenied) return response.sendStatus(403);
      response.sendStatus(500);
    }
  }

  async getById({ params, session }: Request, response: Response) {
    const { id } = params;
    const cat: number | undefined = session!.user.category;
    if (!cat) return response.sendStatus(403);
    try {
      const client = await this.service.getById(parseInt(id), cat, session!.user.id);
      return response.status(200).send(client);
    } catch (error) {
      if (error instanceof AccessDenied) return response.sendStatus(403);
      response.sendStatus(500);
    }
  }

  async getByfilters({ session, body }: Request, response: Response) {
    const { filters } = body;
    let cat = session!.user.category;
    if (!isSearchValid(filters) || !cat) response.sendStatus(400);

    try {
      const items = await this.service.getByfilters(cat, filters);
      response.send(items);
    } catch (error) {
      if (error instanceof AccessDenied) return response.sendStatus(403);
      response.sendStatus(500);
    }
  }

  async remove({ params, session }: Request, response: Response) {
    const { id } = params;
    const cat: number | undefined = session!.user.category;
    if (!cat) return response.sendStatus(403);

    try {
      await this.service.remove(parseInt(id), cat);
      response.sendStatus(200);
    } catch (error) {
      if (error instanceof AccessDenied) return response.sendStatus(403);
      response.sendStatus(500);
    }
  }

  async login({ body, session }: Request, response: Response) {
    const { username, password } = body;
    if (session!.user) {
      return response.status(202).send(new LoginData(session!.user));
    }
    if (isUsernameValid(username) && isPasswordValid(password)) {
      try {
        const user = await this.service.authorization(username, password);
        session!.user = new LoginData(user);
        return response.status(202).send(new LoginData(user));
      } catch (error) {
        if (error instanceof UndefinedUser) return response.sendStatus(403);
        return response.sendStatus(500);
      }
    }
    response.sendStatus(406);
  }

  async logout({ session }: Request, response: Response) {
    if (session!.user) {
      return session!.destroy(_ => response.sendStatus(200));
    }
    response.sendStatus(400);
  }

  async completeRegistration({ body, session }: Request, response: Response) {
    const cat = session!.user.category;
    if (!cat) return response.sendStatus(403);
    try {
      await this.service.completeRegistration(body, cat);
      return response.sendStatus(200);
    } catch (error) {
      response.sendStatus(500);
    }
  }

  async emailVerify() {} //TODO

  async accessUpdate({ body, session }: Request, response: Response) {
    const { id, toCategory } = body;
    const auth = session!.user.category;
    if (!auth) return response.sendStatus(403);

    if (parseInt(id) === NaN || parseInt(toCategory) === NaN) {
      return response.sendStatus(400);
    }
    try {
      await this.service.accessUpdate(Number(id), Number(toCategory), parseInt(auth));
    } catch (error) {
      response.sendStatus(500);
    }
  }
}
