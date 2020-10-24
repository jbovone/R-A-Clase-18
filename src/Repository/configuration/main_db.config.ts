import DIContainer, { factory } from 'rsdi';
import { Options } from 'sequelize';
import { Sequelize } from 'sequelize';

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

function addMainDatabase() {
  let configuration;

  if (process.env.NODE_ENV === 'development') {
    configuration = development;
  } else {
    configuration = production;
  }

  return new Sequelize(configuration);
}

export default addMainDatabase;
