import Sequelize, { Model, DataTypes } from 'sequelize';

class ClientModel extends Model {
  static setup(sequelizeInstance: Sequelize.Sequelize) {
    ClientModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
        },
        username: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        firstName: {
          type: DataTypes.STRING,
        },
        lastName: {
          type: DataTypes.STRING,
        },
        documentType: {
          type: DataTypes.STRING,
        },
        documentNumber: {
          type: DataTypes.BIGINT,
        },
        address: {
          type: DataTypes.STRING,
        },
        telephone: {
          type: DataTypes.INTEGER,
        },
        bornDate: {
          type: DataTypes.INTEGER,
        },
        category: {
          type: DataTypes.INTEGER,
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
        modelName: 'Clients',
        timestamps: false,
      }
    );
    return ClientModel;
  }
}

export default ClientModel;
