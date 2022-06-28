function usuarios(sequelize, DataTypes){
	
	
	const usuario = sequelize.define(
		'usuario',
		(cols = {
			id: {
				as: 'primaryKey',
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
			nombre: {
				type: DataTypes.STRING(200),
			},
			apellido: {
				type: DataTypes.STRING(200),
				},
			dni: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            numeroLote: {
                type: DataTypes.STRING,

            },
            telefono: {
                type: DataTypes.STRING,
            },
            tipo: {
                type: DataTypes.INTEGER,

            },
			
			image : {
				type: DataTypes.STRING(150),
			}

		}),
		(config = {
			camelCase: false,
			tablename: 'Usuarios',
			timestamps: false, 
			
		})
	);
    
	return usuario;
};
module.exports = usuarios;