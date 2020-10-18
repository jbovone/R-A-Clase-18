import { Router } from 'express';

const automobile = Router();

automobile.post(`/new`, (req, res) => {
  res.send('newcar');
});

automobile.post(`/delete/:id`, (req, res) => {
  const { id } = req.params;
  res.send('deleted');
});

automobile.get(`/:id`, (req, res) => {
  const { id } = req.params;
  res.send('getone');
});

automobile.get(`/all`, (req, res) => {
  res.send('getall');
});

automobile.get(`/:filters`, (req, res) => {
  const { filters } = req.params;
  res.send('getsome');
});

automobile.put(`/:id`, (req, res) => {
  const { id } = req.params;
  res.send('updateone');
});

export default automobile;
