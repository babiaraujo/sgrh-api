const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Funcionario = sequelize.define('Funcionario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Nome é obrigatório' },
      notEmpty: { msg: 'Nome não pode ser vazio' }
    }
  },
  data_nascimento: {
    type: DataTypes.DATE,
    allowNull: true,
    validate: {
      isDate: { msg: 'Data de nascimento deve ser uma data válida' }
    }
  },
  departamento_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'departamentos', 
      key: 'id'
    },
    validate: {
      isInt: { msg: 'Departamento ID deve ser um número inteiro' }
    }
  }
}, {
  tableName: 'funcionarios', 
  timestamps: true, 
  underscored: true 
});

module.exports = Funcionario;
