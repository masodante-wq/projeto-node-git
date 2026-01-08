const express = require('express');
const PecaController = require('../controllers/pecaController');

const router = express.Router();

router.get('/', PecaController.getAll);
router.post('/', PecaController.create);
router.put('/:id', PecaController.update);
router.delete('/:id', PecaController.delete);

module.exports = router;
