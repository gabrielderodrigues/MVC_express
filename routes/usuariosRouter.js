const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.get('/', usuariosController.index);
router.post('/', usuariosController.create);
router.delete('/:id', usuariosController.delete);
router.put('/:id', usuariosController.update);

module.exports = router;