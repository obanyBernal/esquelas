const express = require('express');
const router = express.Router();
const Fondo = require('../models/Fondo');

// Obtener todos los fondos
router.get('/', async (req, res) => {
  try {
    const fondos = await Fondo.findAll();
    res.json(fondos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener fondos' });
  }
});

// Crear un nuevo fondo (opcional)
router.post('/', async (req, res) => {
  try {
    const fondo = await Fondo.create(req.body);
    res.status(201).json(fondo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear fondo' });
  }
});

module.exports = router;
