const Sequelize = require('sequelize');

const sequelize = new Sequelize('sgrh_db', 'root', 'senha', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
