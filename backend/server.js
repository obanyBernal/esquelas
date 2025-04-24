const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const esquelaRoutes = require('./routes/esquela.routes');
const fondoRoutes = require('./routes/fondo.routes');
const pensamientoRoutes = require('./routes/pensamiento.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/esquelas', esquelaRoutes);
app.use('/api/fondos', fondoRoutes);
app.use('/api/pensamientos', pensamientoRoutes);

sequelize.sync().then(() => {
  app.listen(3001, () => console.log('Servidor corriendo en http://localhost:3001'));
});
