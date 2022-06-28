
const path = require('path');


const { body } = require('express-validator');

const validations = [
    body('nombre').notEmpty().withMessage('Escriba un nombre'),
    body('apellido').notEmpty().withMessage('Escriba un apellido'),
    body('dni').notEmpty().withMessage('Escriba un dni'),
    body('numero de Lote').notEmpty().withMessage('Escriba un número de lote'),

    body('email')
        .notEmpty().withMessage('Escriba un email').bail()
        .isEmail().withMessage('Escriba un correo valido'),
    
    
    body('avatar').custom((value,{req }) => {
        let file = req.file;
        console.log(req.file)
        let acceptedExtensions = ['.jpg' , '.png', '.jpeg' ];
       
        if (!file) {
            throw new Error('Suba una imagen');
        } else { 
             let fileExtensions = path.extname(file.originalname);
            if (acceptedExtensions.includes(fileExtensions)===false){
                throw new Error('Los archivos permitidos son ' + acceptedExtensions.join(', '))
            }
        };    
        return true; 
    }), 
    body('password').notEmpty().withMessage('Escriba una contraseña'), 
    body('confirmar password').notEmpty().withMessage('Confirmar contraseña'),  
]

module.exports = validations;