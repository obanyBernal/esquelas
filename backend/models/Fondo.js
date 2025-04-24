const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Fondo = sequelize.define('Fondo', {
  nombre: DataTypes.STRING,
  imagen: DataTypes.STRING, // url o nombre de archivo
});

module.exports = Fondo;
