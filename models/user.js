const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull:false,
    },
   idade:{
        type: DataTypes.INTEGER(3),
        allowNull:false,
        unique: true,
    },
    loginuser:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,
    },
    celular:{
        type: DataTypes.INTEGER(11),
        allowNull:false,
        unique: true,
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
},{
    timestamps: false,
});

module.exports = User;