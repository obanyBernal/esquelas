const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Esquela = sequelize.define('Esquela', {
  nombre: DataTypes.STRING,
  datos: DataTypes.TEXT,
  pensamiento: DataTypes.TEXT,
  fondo: DataTypes.STRING,
});

module.exports = Esquela;