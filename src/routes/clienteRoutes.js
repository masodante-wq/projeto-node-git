const express = require('express');
const ClienteController = require('../controllers/clienteController');

const router = express.Router();

router.get('/', ClienteController.getAll);
router.post('/', ClienteController.create);
router.put('/:id', ClienteController.update);
router.delete('/:id', ClienteController.delete);

module.exports = router;
