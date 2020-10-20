import Sequelize, { Model, DataTypes } from 'sequelize';
import AutomovileModel from './AutomobilesModel';
import ClientsModel from './ClientsModel';

class TransactionsModel extends Model {
  static setup(sequelizeInstance: Sequelize.Sequelize) {
    TransactionsModel.init(
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
        fromTime: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        toTime: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        paid: {
          type: DataTypes.INTEGER,
        },
        totalPrice: {
          type: DataTypes.INTEGER,
        },
        fkAlive: {
          type: DataTypes.BOOLEAN, //!!car.statuts === "in-service"
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
    return TransactionsModel;
  }
  static setupAssociations(ClientsModel:any, AutomovileModel:any) {
    TransactionsModel.belongsTo(ClientsModel, { foreignKey: 'id' });
    TransactionsModel.belongsTo(AutomovileModel, { foreignKey: 'id' });
  }
}

export default TransactionsModel
