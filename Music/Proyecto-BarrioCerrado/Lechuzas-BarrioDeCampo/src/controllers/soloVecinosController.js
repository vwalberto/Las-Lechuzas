const db = require('../database/datamodels/usuarios');
const bcrypt = require('bcryptjs');


const controlador = {	 
    soloVecinos: (req, res) => {
        res.render("soloVecinos");
    }
}

validarUsuario: (req, res) => {
    const userToLogin = db.usuario.find(oneUser => oneUser.email === req.body.email);

    if (userToLogin === undefined) {
        return res.render( 'usuarios/soloVecinos' );
    }

    if (userToLogin !== undefined) {
        const isPasswordOk = bcrypt.compareSync(req.body.password, userToLogin.password);
        
        if (!isPasswordOk) {
            return res.send("Las contraseñas no coinciden");
        }

        delete userToLogin.password;
        req.session.user = userToLogin;

        console.log( req.session );

        return res.redirect("/index");
    }
}
    





module.exports = controlador;


