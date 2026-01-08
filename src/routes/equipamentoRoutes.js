const express = require('express');
const EquipamentoController = require('../controllers/equipamentoController');

const router = express.Router();

router.get('/', EquipamentoController.getAll);
router.post('/', EquipamentoController.create);
router.put('/:id', EquipamentoController.update);
router.delete('/:id', EquipamentoController.delete);

module.exports = router;
