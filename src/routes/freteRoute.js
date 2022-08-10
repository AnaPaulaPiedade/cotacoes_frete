
const express = require('express');
const router = express.Router();
const controller = require('../controllers/freteController');

const jsonParser = express.json()
router.use(jsonParser);

router.post('/', controller.buscaFrete);

module.exports = router;