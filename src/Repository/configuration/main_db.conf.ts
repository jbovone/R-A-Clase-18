import { Options } from 'sequelize';

const development: Options = {
  dialect: 'sqlite',
  storage: '../bin/rental_app.db',
  logging: console.log,
};

const production: Options = {
  dialect: 'mysql',
  database: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
};

const setMode = () => {
  if (process.env.NODE_ENV === 'development') {
    return development;
  }
  return production;
};
const configuration = setMode();

export default configuration;
