const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './public/imagenes/avatars')// agregar avatars para validar con imagenes 
    },
    filename: (req, file, cb) => {
        let fileName= `${Date.now()}_img${path.extname(file.originalname)}`; 
        cb(null, fileName);
    }
})

const uploadFile= multer ({storage});

module.exports = uploadFile;