var { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { v4: uuidv4 } = require('uuid');

const Users = sequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    trim: true,
  },
  lastName: {
    type: DataTypes.STRING,
    trim: true,
  },
  avatar: {
    type: DataTypes.STRING,
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

Users.beforeCreate((users) => (users.id = uuidv4()));

module.exports = Users;
