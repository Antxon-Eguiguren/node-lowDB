// Cargar el servidor
const app = require('./app');

// Cargar la BBDD
const { crearConexion } = require('./db');
crearConexion();

// Inicializar el servidor
app.listen(3000);
console.log('Servidor en puerto', 3000);