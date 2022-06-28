const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// index page 
app.get('/', function(req, res) {
    res.render('usuarios/index');
    
});

// ubicacion
app.get('/ubicacion', function(req, res) {
    res.render('usuarios/ubicacion');
    
});
// galeria
app.get('/galeria', function(req, res) {
    res.render('usuarios/galeria');
    
});
// solo vecinos
app.get('/soloVecinos', function(req, res) {
    res.render('usuarios/soloVecinos');
    
});

// Registro
app.get('/formRegistro', function(req, res) {
    res.render('usuarios/formRegistro');
    
});



const usuariosRouter = require("./routes/usuariosRoute") //ruta usuarios********
app.use('/usuarios', usuariosRouter);                    //********* 

const soloVecinosRouter = require("./routes/soloVecinosRoute") //ruta solo Vecinos
app.use('/soloVecinos', soloVecinosRouter);

const serviciosRouter = require("./routes/serviciosRoute") //ruta servicios
app.use('/servicios', serviciosRouter);


const contactoRouter = require("./routes/contactoRoute") //ruta contacto
app.use('/contacto', contactoRouter);

const formRegistroRouter = require("./routes/formRegistroRoute") //ruta formulario de registro
app.use('/formRegistro', formRegistroRouter);









app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas
app.set('view engine', 'ejs');

app.use('*', usuariosRouter)

app.listen(process.env.PORT || 3000, () => console.log('Hola'));


 

 
