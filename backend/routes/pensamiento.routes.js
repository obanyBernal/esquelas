const express = require('express');
const router = express.Router();
const Pensamiento = require('../models/Pensamiento');

// Obtener todos los pensamientos
router.get('/', async (req, res) => {
  try {
    const pensamientos = await Pensamiento.findAll();
    res.json(pensamientos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener pensamientos' });
  }
});

// Crear un nuevo pensamiento (opcional)
router.post('/', async (req, res) => {
  try {
    const pensamiento = await Pensamiento.create(req.body);
    res.status(201).json(pensamiento);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear pensamiento' });
  }
});

module.exports = router;
