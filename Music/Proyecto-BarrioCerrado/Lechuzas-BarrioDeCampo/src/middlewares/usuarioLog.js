function usuarioLog(req, res, next) {
    
    
    res.locals.isLogged = false;

    if (req.session.userLogged){
        res.locals.isLogged= true;
        res.locals.userLogged = req.session.userLogged; 
    } //le paso a una variable local lo que tengo en la session

    
    next();
    
} 

module.exports = usuarioLog;