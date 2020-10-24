import { Sequelize, Options } from 'sequelize';

function addSessionsDB() {
  const sessionConfigDB: Options = {
    dialect: 'sqlite',
    storage: process.env.SESSION_DB_PATH!,
  };

  return new Sequelize(sessionConfigDB);
}
export default addSessionsDB;
