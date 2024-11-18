const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Tutoria = sequelize.define( 'Tutoria', {
    cod_tutoria: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, 
      allowNull: false,
      unique: true,
    },
    dia_agendado: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    hora_agendada: {
      type: DataTypes.TIME, 
      allowNull: false,
    },
    aval_tutor: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0,
        max: 5,
      },
    },
    cod_curso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Cursos',
        key: 'id',
      },
    },
  }, {
    tableName: 'Tutorias',
    timestamps: true,
  }
);

module.exports = Tutoria;
