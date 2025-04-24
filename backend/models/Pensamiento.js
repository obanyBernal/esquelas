const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Pensamiento = sequelize.define('Pensamiento', {
  texto: DataTypes.TEXT
});

module.exports = Pensamiento;
