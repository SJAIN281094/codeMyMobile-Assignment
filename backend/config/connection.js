var Sequelize = require('sequelize');
var config = require('./index');

const sequelize = new Sequelize(
  config.database.databaseName,
  config.database.username,
  config.database.password,
  {
    query: { raw: true },
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: false,
  }
);

module.exports = sequelize;
