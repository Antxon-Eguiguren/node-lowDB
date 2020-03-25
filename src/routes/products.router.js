const router = require('express').Router();
const { crearProducto, borrarProducto, obtenerProductos, obtenerProducto, actualizarProducto } = require('../controllers/products.controller');

// POST http://localhost:3000/products
router.post('/products', crearProducto);

// DELETE http://localhost:3000/products/id
router.delete('/products/:id', borrarProducto);

// GET http://localhost:3000/products
router.get('/products', obtenerProductos);

// GET http://localhost:3000/products/:id
router.get('/products/:id', obtenerProducto);

// PUT http://localhost:3000/products/:id
router.put('/products/:id', actualizarProducto);

module.exports = router;