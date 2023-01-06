'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Station.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [3, 30],
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          checkLen(value) {
            if (value.length >= 5 && value.length <= 1000) {
              return true
            } else {
              throw new Error('độ dài phải từ 5 - 1000')
            }
          },
        },
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [['HCM', 'DN', 'CT', 'HP', 'HN', 'QNAM', 'QNHON', 'HUE']],
        },
      },
    },
    {
      sequelize,
      modelName: 'Station',
    }
  )
  return Station
}
