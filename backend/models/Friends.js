var { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { v4: uuidv4 } = require('uuid');

const Friends = sequelize.define('friends', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  userOneId: {
    type: DataTypes.STRING,
    trim: true,
  },
  userTwoId: {
    type: DataTypes.STRING,
    trim: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
});

Friends.beforeCreate((friends) => (friends.id = uuidv4()));

module.exports = Friends;
