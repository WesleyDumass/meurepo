const {DataTypes} = require ('sequelize');
const sequelize = require ('../config/config');

const AlunoCurso = sequelize.define('AlunoCurso', {
    cod_aluno:{
        type: DataTypes.INTEGER,
        allowNull:false,
        unique:true,
    },
    cod_curso:{
        type: DataTypes.INTEGER,
        allowNull:false,
        unique:true,
    },
    progresso:{
        type: DataTypes.INTEGER,        
    },
},{
    timestamps: false,
});

module.exports = AlunoCurso;