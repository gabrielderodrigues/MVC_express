const express = require('express');
const router = express.Router();
const comentariosController = require('../controllers/usuariosController');

router.get('/', comentariosController.index);