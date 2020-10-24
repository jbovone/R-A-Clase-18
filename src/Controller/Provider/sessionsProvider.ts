import session from 'express-session';
import sequelizeStore from 'connect-session-sequelize';
import { Sequelize } from 'sequelize/types';

function configureSession(db: Sequelize) {
  const SequelizeStore = sequelizeStore(session.Store);

  const ONE_WEEK_IN_SECONDS = 604800000;

  const sessionOptions = {
    store: new SequelizeStore({ db: db }),
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: ONE_WEEK_IN_SECONDS },
  };

  return session(sessionOptions); //e.requesthandler
}

export default configureSession;
