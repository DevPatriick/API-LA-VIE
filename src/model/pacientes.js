const db = require('../database/conexao');
const { DataTypes } = require('sequelize');

const pacientes = db.define("pacientes", {
    id: {
        type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true
    }, 
    nome: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
    },
    idade: { 
        type: DataTypes.DATE,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
}, {
    tablename: "pacientes"
});

module.exports = pacientes;