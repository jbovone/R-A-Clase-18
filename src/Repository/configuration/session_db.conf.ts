import { Sequelize, Options } from 'sequelize';
import session from 'express-session';
import sequelizeStore from 'connect-session-sequelize';

const sessionConfigDB: Options = {
  dialect: 'sqlite',
  storage: process.env.SESSION_DB_PATH!,
};

const sequelize = new Sequelize(sessionConfigDB);
const SequelizeStore = sequelizeStore(session.Store);

const ONE_WEEK_IN_SECONDS = 604800000;

const sessionOptions = {
  store: new SequelizeStore({ db: sequelize }),
  secret: process.env.SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: ONE_WEEK_IN_SECONDS },
};

session(sessionOptions); //e.requesthandler
