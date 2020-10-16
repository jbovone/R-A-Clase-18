import { Sequelize, Model, DataTypes } from 'sequelize';

const development = {
  Dialect: 'sqlite',
  storage: './bin/rental_app.db',
};
const production = {
  database: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  Dialect: 'mysql',
};

export default (() => production)();
const sequelize = new Sequelize(production);

/** sample:
 * class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  },
  { sequelize, modelName: 'user' }
);

(async () => {
  await sequelize.sync();
  const jane = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20),
  });
  console.log(jane.toJSON());
})();
 */
