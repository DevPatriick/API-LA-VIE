const db = require('../database/conexao');
const { DataTypes } = require('sequelize');

const psicologo = db.define("psicologo", {
    id: {
        type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true
    }, 
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apresentacao: {
         type: DataTypes.TEXT,
         allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
}, {
    tablename: "psicologos"
});

module.exports = psicologo;