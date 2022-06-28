const express = require('express');
const router = express.Router();

const path = require('path');

const { body } = require('express-validator');
const validations = require('../middlewares/usuarioValidate')
const mult = require('../middlewares/multer')

const usuariosController = require('../controllers/usuariosController');

const serviciosController = require('../controllers/serviciosController');

const soloVecinosController = require('../controllers/soloVecinosController');


//router.get('/login', usuariosController.login); // formulario login
//router.post('/soloVecinos', usuariosController.validLogin); 

//router.get('/formRegistro', usuariosController.formRegistro); // form registro ***********

router.get('/soloVecinos', usuariosController.soloVecinos); // Login

//router.get('/perfilUsuario/:usuarioId', usuariosController.perfilUsuario)  //perfil
//router.get('/contacto', usuariosController.contacto); // formulario de contacto



                                                


module.exports = router;