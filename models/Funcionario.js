const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Funcionario = sequelize.define('funcionario', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  data_nascimento: Sequelize.DATE,
  departamento_id: Sequelize.INTEGER
});

module.exports = Funcionario;
