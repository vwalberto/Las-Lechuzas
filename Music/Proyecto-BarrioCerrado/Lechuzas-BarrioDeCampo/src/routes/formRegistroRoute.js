const express = require('express');
const router = express.Router();


const path = require('path');

const formRegistroController = require('../controllers/formRegistroController');




// formulario registro
router.get('/', function(req, res) {
    res.render('usuarios/registro');
    
});


module.exports = router;













