import Sequelize, { Model, DataTypes } from 'sequelize';

class ClientRepository extends Model {
  static setup(sequelizeInstance: Sequelize.Sequelize) {
    ClientRepository.init(
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
        isAdmin: {
          type: DataTypes.BOOLEAN,
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
        modelName: 'Client',
        timestamps: false,
      }
    );
    return ClientRepository;
  }
}

export default ClientRepository;
