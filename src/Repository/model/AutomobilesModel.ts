import Sequelize, { Model, DataTypes } from 'sequelize';

class AutomobileModel extends Model {
  static setup(sequelizeInstance: Sequelize.Sequelize) {
    AutomobileModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
        },
        brand: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        model: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        year: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        miles: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        color: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        passengers: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        gears: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        rentPrice: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize: sequelizeInstance,
        modelName: 'Automobiles',
        timestamps: true,
      }
    );
    return AutomobileModel;
  }
}

export default AutomobileModel;
