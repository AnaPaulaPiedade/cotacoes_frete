const express = require('express');
const app = express();
const router = express.Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

//Rotas
const index = require('./routes/index');
const freteRoute = require('./routes/freteRoute');

app.use('/', index);
app.use('/frete', freteRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;