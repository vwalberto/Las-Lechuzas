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
}

module.exports = controlador;