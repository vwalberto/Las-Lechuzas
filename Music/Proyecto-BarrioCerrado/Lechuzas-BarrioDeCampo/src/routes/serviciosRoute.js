const express = require('express');
const router = express.Router();


const serviciosController = require('../controllers/serviciosController');


router.get('/', serviciosController.index);

router.get('/detail/:id', serviciosController.detail); 

router.post('/edit/:id', serviciosController.edit);

router.post('/create', serviciosController.create);

router.get('/create', serviciosController.new); 

module.exports = router;
