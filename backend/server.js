const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const router = express.Router();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const USUARIOS_FILE = './usuarios.json';

// 🔐 Login
router.post('/login', (req, res) => {
  const { usuario, contrasena } = req.body;
  const usuarios = JSON.parse(fs.readFileSync(USUARIOS_FILE));

  const encontrado = usuarios.find(u => u.usuario === usuario);
  if (!encontrado) return res.status(401).json({ error: 'Usuario no encontrado' });

  bcrypt.compare(contrasena, encontrado.contrasena, (err, match) => {
    if (match) {
      const { contrasena, ...usuarioSeguro } = encontrado;
      res.json(usuarioSeguro);
    } else {
      res.status(401).json({ error: 'Contraseña incorrecta' });
    }
  });
});

// 🔄 Cambiar contraseña
router.post('/cambiar-password', async (req, res) => {
  const { usuario, nuevaContrasena } = req.body;
  const usuarios = JSON.parse(fs.readFileSync(USUARIOS_FILE));

  const index = usuarios.findIndex(u => u.usuario === usuario);
  if (index === -1) return res.status(404).json({ error: 'Usuario no encontrado' });

  const hash = await bcrypt.hash(nuevaContrasena, 10);
  usuarios[index].contrasena = hash;
  usuarios[index].requiereCambio = false;

  fs.writeFileSync(USUARIOS_FILE, JSON.stringify(usuarios, null, 2));
  res.json({ mensaje: 'Contraseña actualizada' });
});

// 🛠 Montar todas las rutas bajo /api-esquelas
app.use('/api-esquelas', router);

app.listen(PORT, () => {
  console.log(`✅ Backend escuchando en http://localhost:${PORT}/api-esquelas`);
});
