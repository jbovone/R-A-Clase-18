import Sequelize, { Model, DataTypes } from 'sequelize';

class AutomovileRepository extends Model {
  static setup(sequelizeInstance: Sequelize.Sequelize) {
    AutomovileRepository.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
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
          type: DataTypes.STRING,
          allowNull: false,
        },
        gears: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
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
        modelName: 'Automoviles',
        timestamps: false,
      }
    );
    return AutomovileRepository;
  }
}

export default AutomovileRepository;
