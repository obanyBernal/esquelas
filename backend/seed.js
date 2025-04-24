const sequelize = require('./config/db');
const Fondo = require('./models/Fondo');
const Pensamiento = require('./models/Pensamiento');

const pensamientos = [
  { texto: 'No temas, porque yo estoy contigo.' },
  { texto: 'El Señor es mi pastor; nada me faltará.' },
  { texto: 'En la casa del Señor moraré por largos días.' },
  { texto: 'El amor nunca deja de ser.' },
  { texto: 'Dios da descanso a los que confían en Él.' }
];

const fondos = [
  { nombre: 'Fondo Clásico', imagen: 'fondo1.png' },
  { nombre: 'Fondo Azul Cielo', imagen: 'fondo2.png' },
  { nombre: 'Fondo Elegante', imagen: 'fondo3.png' },
  { nombre: 'Fondo Floral', imagen: 'fondo4.png' },
  { nombre: 'Fondo Minimalista', imagen: 'fondo5.png' }
];

const cargarDatos = async () => {
  try {
    await sequelize.sync({ force: true }); // Limpia y vuelve a crear todas las tablas
    await Fondo.bulkCreate(fondos);
    console.log(typeof Pensamiento.bulkCreate); // debería imprimir 'function'
    await Pensamiento.bulkCreate(pensamientos);
    console.log('✅ Datos iniciales insertados correctamente');
    process.exit();
  } catch (error) {
    console.error('❌ Error al insertar datos:', error);
    process.exit(1);
  }
};

cargarDatos();
