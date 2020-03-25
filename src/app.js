// Inicializar el servidor
const express = require('express');
const morgan = require('morgan');
const app = express();

// Middleware con Morgan
app.use(morgan('dev'));     // Usamos Morgan solo en Dev
app.use(express.json());    // REST-API a través de función json();

// Routes
app.use(require('./routes/products.router'));

// Exportamos app para usarlo en index.js
module.exports = app;       