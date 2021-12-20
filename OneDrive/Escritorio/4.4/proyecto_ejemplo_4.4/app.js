const express = require('express');
const path = require('path');

const app = express();

app.use('/css',express.static(path.resolve(__dirname, './node_modules/bootstrap/dist/css')))
app.use('/js',express.static(path.resolve(__dirname, './node_modules/bootstrap/dist/js')))
app.use('/js',express.static(path.resolve(__dirname, './node_modules/jquery/dist')))


app.get('', (req,res) =>{
    //res.send("Hola Mundo");  // Permite enviar texto o codigo HTML
    res.sendFile(path.resolve(__dirname, './views/index.html'));  // Permite enviar un archivo HTML
});

app.use(express.static(path.resolve(__dirname, './public')));

app.listen(3002, () => {
    console.log("Servidor corriendo");
});



