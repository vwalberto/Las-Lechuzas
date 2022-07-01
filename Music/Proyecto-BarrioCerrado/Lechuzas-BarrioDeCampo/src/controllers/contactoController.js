const fs = require('fs');
const path = require('path');

const db = require('../database/datamodels/usuarios');

const controlador = {
    contacto: (req, res) => {
        res.render("usuarios/contacto")
    },
    send: (req, res) => {
        console.log("hola");
        //res.render("usuarios/contacto")
    },
    consulta: (req, res) => {
        res.render("usuarios/contacto")
    }
create: (req, res) => {
    
/*// 
	create: (req, res) => {

		const resultValidation = validationResult(req);
				
		if (resultValidation.errors.length > 0 ){
			return res.render('contacto', {
				errors: resultValidation.mapped(),
                 oldData : req.body})
		}

*/

},
consulta: (req, res) => {
    res.render("usuarios/consulta")
}
}

module.exports = controlador;