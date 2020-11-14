import { Router } from 'express';
import { bookingsService } from '../../types';
import { Request, Response } from 'express-serve-static-core';
import AccessDenied from '../Exeptions/AccessDenied';
import { isSearchValid } from '../Validation/validate';

export default class ClientController {
  provider;
  service;
  base;
  constructor(router: Router, service: bookingsService) {
    this.base = '/bookings';
    this.provider = router;
    this.service = service;
  }
  manifesto() {
    this.provider.post('/new', this.create.bind(this));
    this.provider.post(`/delete/:id`, this.remove.bind(this));
    this.provider.get(`/all`, this.getAll.bind(this));
    this.provider.get(`/:id`, this.getById.bind(this));
    this.provider.get(`/:filters`, this.getByfilters.bind(this));
    this.provider.put(`/:id`, this.extendBooking.bind(this));
    return this.provider;
  }

  async create({ body, session }: Request, response: Response) {
    const cat: number | undefined = session!.user.category;
    if (!cat) return response.sendStatus(403);
    if (true) {
      //TODO validation
      try {
        const booking = await this.service.create(body, cat);
        response.status(202).send('Booking saved successfully');
      } catch (error) {
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
      const bookings = await this.service.getAll(cat);
      return response.send(bookings);
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
      const booking = await this.service.getById(parseInt(id), cat);
      return response.status(200).send(booking);
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
  async extendBooking() {
    /**TODO */
  }
}
