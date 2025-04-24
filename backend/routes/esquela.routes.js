const express = require('express');
const router = express.Router();
const Esquela = require('../models/Esquela');

// Crear una nueva esquela
router.post('/', async (req, res) => {
  try {
    const esquela = await Esquela.create(req.body);
    res.status(201).json(esquela);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear esquela' });
  }
});

// Obtener todas las esquelas
router.get('/', async (req, res) => {
  try {
    const esquelas = await Esquela.findAll();
    res.json(esquelas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener esquelas' });
  }
});

// Obtener una sola esquela
router.get('/:id', async (req, res) => {
  try {
    const esquela = await Esquela.findByPk(req.params.id);
    if (!esquela) return res.status(404).json({ error: 'No encontrada' });
    res.json(esquela);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar esquela' });
  }
});

// Actualizar una esquela
router.put('/:id', async (req, res) => {
  try {
    const esquela = await Esquela.findByPk(req.params.id);
    if (!esquela) return res.status(404).json({ error: 'No encontrada' });

    await esquela.update(req.body);
    res.json(esquela);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar esquela' });
  }
});

// Eliminar una esquela
router.delete('/:id', async (req, res) => {
  try {
    const esquela = await Esquela.findByPk(req.params.id);
    if (!esquela) return res.status(404).json({ error: 'No encontrada' });

    await esquela.destroy();
    res.json({ mensaje: 'Esquela eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar esquela' });
  }
});

module.exports = router;
