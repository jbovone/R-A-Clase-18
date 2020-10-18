import { Router } from 'express';

const clients = Router();

clients.post(`/new`, (req, res) => {
  res.send('new client');
});

clients.post(`/delete/:id`, (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  res.send('delete ' + id);
});

clients.get(`/:id`, (req, res) => {
  const { id } = req.params;
  res.send('getone');
});

clients.get(`/all`, (req, res) => {
  console.log('CLIENTE');
  res.send('getall');
});

clients.get(`/:filters`, (req, res) => {
  const { filters } = req.params;
  res.send('getsome');
});

clients.put(`/:id`, (req, res) => {
  res.send('updateOne');
});

export default clients;
