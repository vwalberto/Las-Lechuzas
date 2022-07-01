const express = require('express');
const router = express.Router();

const controller = require('../controllers/contactoController')

router.post('/send', controller.send);

// contacto 
router.get('/', controller.contacto);
    




module.exports = router;