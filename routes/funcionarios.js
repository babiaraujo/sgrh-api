const express = require('express');
const router = express.Router();
const Funcionario = require('../models/Funcionario');

// Rota para listar todos os funcionários
router.get('/', async (req, res) => {
  try {
    const funcionarios = await Funcionario.findAll();
    res.json(funcionarios);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar funcionários.' });
  }
});

// Rota para buscar um funcionário pelo ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const funcionario = await Funcionario.findByPk(id);
    if (!funcionario) {
      res.status(404).json({ message: 'Funcionário não encontrado.' });
    } else {
      res.json(funcionario);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao buscar funcionário.' });
  }
});

// Rota para criar um novo funcionário
router.post('/', async (req, res) => {
  const { nome, data_nascimento, departamento_id } = req.body;
  try {
    const novoFuncionario = await Funcionario.create({ nome, data_nascimento, departamento_id });
    res.status(201).json(novoFuncionario);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar funcionário.' });
  }
});

// Rota para atualizar um funcionário pelo ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, data_nascimento, departamento_id } = req.body;
  try {
    const funcionario = await Funcionario.findByPk(id);
    if (!funcionario) {
      res.status(404).json({ message: 'Funcionário não encontrado.' });
    } else {
      await funcionario.update({ nome, data_nascimento, departamento_id });
      res.json(funcionario);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao atualizar funcionário.' });
  }
});

// Rota para deletar um funcionário pelo ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const funcionario = await Funcionario.findByPk(id);
    if (!funcionario) {
      res.status(404).json({ message: 'Funcionário não encontrado.' });
    } else {
      await funcionario.destroy();
      res.json({ message: 'Funcionário deletado com sucesso.' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao deletar funcionário.' });
  }
});

module.exports = router;
