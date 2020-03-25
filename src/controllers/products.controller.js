const { obtenerConexion } = require('../db');
const { v4 } = require('uuid');

const crearProducto = (req, res) => {
    const nuevoProducto = {
        id: v4(),
        nombre: req.body.nombre,
        precio: req.body.precio
    };
    obtenerConexion().get('products').push(nuevoProducto).write();
    res.json({ mensaje: 'Producto añadido a la BBDD', nuevoProducto });
};

const borrarProducto = (req, res) => {
    const productoBorrado = obtenerConexion().get('products').remove({ id: req.params.id }).write();
    res.json({ mensaje: 'Producto borrado de la BBDD', productoBorrado });
};

const obtenerProductos = (req, res) => {
    const productos = obtenerConexion().get('products');
    res.json({ mensaje: 'Obtenidos todos los productos de la BBDD', productos });
};

const obtenerProducto = (req, res) => {
    const producto = obtenerConexion().get('products').find({ id: req.params.id });
    res.json({ mensaje: 'Producto obtenido de la BBDD', producto });
};

const actualizarProducto = async (req, res) => {
    const productoActualizar = await obtenerConexion().get('products').find({ id: req.params.id }).assign(req.body).write();
    res.json({ mensaje: 'Producto actualizado en la BBDD', productoActualizar });
};

module.exports = {
    crearProducto,
    borrarProducto,
    obtenerProductos,
    obtenerProducto,
    actualizarProducto
}