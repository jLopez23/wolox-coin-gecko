'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCryptocurrency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserCryptocurrency.init({
    userId: DataTypes.INTEGER,
    coinId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserCryptocurrency',
  });
  return UserCryptocurrency;
};