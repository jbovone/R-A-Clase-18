import session, { SessionOptions } from 'express-session';
import sequelizeStore from 'connect-session-sequelize';
import { Sequelize } from 'sequelize/types';

class SessionSetup {
  ONE_WEEK_IN_SECONDS;
  options: SessionOptions;
  SequelizeStore;
  constructor(db: Sequelize) {
    this.SequelizeStore = sequelizeStore(session.Store);
    this.ONE_WEEK_IN_SECONDS = 604800000;
    this.options = {
      store: new this.SequelizeStore({ db: db }),
      secret: process.env.SESSION_SECRET!,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: this.ONE_WEEK_IN_SECONDS,
        secure: false,
      },
    };
  }
  generate() {
    return session(this.options);
  }
}
export default SessionSetup;
