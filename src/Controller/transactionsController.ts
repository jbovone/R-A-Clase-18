import { Router } from 'express';

const transactions = Router();

transactions.post(`/new/:id/:unit`, (req, res) => {
  const { id, unit } = req.params; //payment goes here?
  res.send('transaction' + id + unit);
});

transactions.post(`/delete/:id`, (req, res) => {
  const { id } = req.params; //allow cancel a rental
  res.send('deleted');
});

transactions.get(`/:id`, (req, res) => {
  const { id } = req.params;
  res.send('getone');
});

transactions.get(`/all`, (req, res) => {
  res.send('getall');
});

transactions.get(`/:filters`, (req, res) => {
  const { filters } = req.params;
  res.send('getsome');
});

transactions.put(`/:id`, (req, res) => {
  //allows contract extention
  const { id } = req.params;
  res.send('updateone');
});

export default transactions;
