const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

const ValidarCadastro = require('../middlewares/ValidarCadastro');


router.get('/', usuariosController.index);
router.get('/register', usuariosController.register);
router.get('/login', usuariosController.login);
router.post('/', ValidarCadastro, usuariosController.create);
router.put('/:id',  usuariosController.update);
router.delete('/:id', usuariosController.delete);

module.exports = router;