import express from 'express';
import cors from 'cors';

import clients from '../clientsController';
import automobile from '../automobileController';
import transactions from '../transactionsController';

const app = express();

app.use(cors());

app.use('/clients', clients);
app.use('/automobile', automobile);
app.use('/transactions', transactions);

app.listen(4000, () => console.log('listen 4000'));

export default app;
