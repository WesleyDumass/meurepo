const {DataTypes} = require ('sequelize');
const sequelize = require ('../config/config');

const Materia = sequelize.define('Materia', {
    descricao:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
},{
    timestamps: false,
});

module.exports = Materia;