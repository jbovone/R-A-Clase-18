import Sequelize, { Model, DataTypes } from 'sequelize';

class BookingsModel extends Model {
  static setup(sequelizeInstance: Sequelize.Sequelize) {
    BookingsModel.init(
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
        modelName: 'Bookings',
        timestamps: false,
      }
    );
    return BookingsModel;
  }
  static setupAssociations(ClientsModel: any, AutomovileModel: any) {
    BookingsModel.belongsTo(ClientsModel, { foreignKey: 'id' });
    BookingsModel.belongsTo(AutomovileModel, { foreignKey: 'id' });
  }
}

export default BookingsModel;
