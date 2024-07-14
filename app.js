const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const funcionariosRoutes = require('./routes/funcionarios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/funcionarios', funcionariosRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
