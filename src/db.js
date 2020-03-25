const lowdb = require('lowdb');
const File = require('lowdb/adapters/FileAsync');

let db;

async function crearConexion() {
    const adaptador = new File('db.json');
    db = await lowdb(adaptador);
    db.defaults({ products: [] }).write();
};

const obtenerConexion = () => db;

module.exports = {
    crearConexion,
    obtenerConexion
}