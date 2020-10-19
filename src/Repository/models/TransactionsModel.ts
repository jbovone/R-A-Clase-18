import Sequelize, { Model, DataTypes } from 'sequelize';

class TransactionsRepository extends Model {
  static setup(sequelizeInstance: Sequelize.Sequelize) {
    TransactionsRepository.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
        },
        fkUser: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        fkAutoMovile: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastUpdated: {
          type: DataTypes.DATE,
          defaultValue: Sequelize.NOW,
        },
        createdAt: {
          type: DataTypes.DATE,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize: sequelizeInstance,
        modelName: 'Transactions',
        timestamps: false,
      }
    );
    return TransactionsRepository;
  }
}

export default TransactionsRepository;
