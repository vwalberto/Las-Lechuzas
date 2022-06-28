const fs = require('fs');
const path = require('path');
let form = document.getElementById("form-contacto");

const controlador = {
    contacto: (req, res) => {
        res.render("usuarios/contacto")
},

create: (req, res) => {
    let error = "";
   if(form.querySelector("input[name='Name']").length < 1) {
        error += "_name";
   
}
if(error == "") {
    
}
},
consulta: (req, res) => {
    res.render("usuarios/consulta")
}
}

module.exports = controlador;