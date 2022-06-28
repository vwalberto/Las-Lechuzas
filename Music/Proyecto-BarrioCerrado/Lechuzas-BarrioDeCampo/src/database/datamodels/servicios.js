function servicio(sequelize, Datatypes){

    alias = 'servicio';
   
    cols = {
      id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      nombre: {type: Datatypes.STRING(500)},
      
    };

    let cg = {camelCase: false, timestamps: false};

    const servicio = sequelize.define(alias,cols,cg)

    return servicio;
}



    module.exports = servicio;