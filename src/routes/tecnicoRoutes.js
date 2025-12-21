const express = require('express');
const TecnicoController = require('../controllers/tecnicoController');

const router = express.Router();

router.get('/', TecnicoController.getAll);
router.post('/', TecnicoController.create);
router.put('/:id', TecnicoController.update);
router.delete('/:id', TecnicoController.delete);

module.exports = router;
