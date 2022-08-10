
const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('../../swagger.json');

router.get('/docs', swaggerUi.setup(swaggerDocument));

console.log(swaggerUi);

module.exports = router;