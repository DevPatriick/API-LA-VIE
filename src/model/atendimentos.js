const db = require('../database/conexao');
const { DataTypes } = require('sequelize');
const pacientes = require('./pacientes');

const atendimentos = db.define("atendimentos", {
    id: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true
    },
    paciente_id: {
        type: DataTypes.INTEGER,
        references: {
            model: pacientes,
            key: 'id'
        }
    },
    data_atendimento:{
        type: DataTypes.DATE
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }, 
    observacao:{
        type: DataTypes.STRING
    }
    
}, {
    tablename: "atendimentos"
});

module.exports = atendimentos;