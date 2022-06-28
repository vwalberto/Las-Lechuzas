const express = require('express');
const controlador = require('../Controllers/soloVecinosController');
const router = express.Router();

const soloVecinosController = require('../Controllers/soloVecinosController');

router.get('/', soloVecinosController.soloVecinos); 



// soloVecinos
router.get('/', function(req, res) {
    res.render('usuarios/soloVecinos');
    
});

module.exports = router;







 











