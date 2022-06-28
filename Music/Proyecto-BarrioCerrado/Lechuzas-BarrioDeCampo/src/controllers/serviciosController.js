const fs = require('fs');
const path = require('path');

const db = require('../database/datamodels')

const controlador = {

    index: (req,res)=>{
        db.servicio.findAll().then((servicios) => {
            let servicioslista=[];
			for (serv of servicios){
				servicioslista.push(serv);
			}
            res.render('servicios/index', {servicios : servicioslista});
        })
    },

    new: (req, res) => {
        res.render('servicios/servicio-create-form.ejs');
    },

    // Create - Form to create
    create: (req, res) => {
        let idservicio = req.params.id;
		let datos = req.body;
        console.log(req);
		db.servicio.create(
            {
                nombre: datos.nombreservicio,
            }
        )
        .then((resultados) => {
            res.redirect('/');
        });
    },

    // update 
    edit: (req, res) => {
        let idservicio = req.params.id;
		let datos = req.body;
        console.log(req);
		db.servicio.update(
            {
                nombre: datos.nombreservicio,
            },
            {
                where: { id: idservicio },
            }
        )
        .then((resultados) => {
            res.redirect('/');
        });
    },

    // Detalle de un servicio
    detail: (req, res) => {
        
        let id = req.params.id;
		let servicioEncontrado;
        db.servicio.findAll().then((servicios) => {
            for (serv of servicios){
				if(id == serv.id){
                    servicioEncontrado = serv;
                }
			}
            res.render('servicios/servicio-edit-form',{servicioAEditar: servicioEncontrado});
        })
    },

    // Delete - 
    destroy: (req, res) => {
        res.redirect('/');
    
    }

}

module.exports = controlador;