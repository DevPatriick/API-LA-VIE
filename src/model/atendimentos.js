const db = require('../database/conexao');
const { DataTypes } = require('sequelize');
const pacientes = require('./pacientes');
const psicologo = require('./psicologo');

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
    psicologo_id: {
        type: DataTypes.INTEGER,
        references: { 
            model: psicologo,
            key: "id"
        }
    },
    data_atendimento:{
        type: DataTypes.DATE
    },
    observacao:{
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }, 
    
}, {
    tablename: "atendimentos"
});

module.exports = atendimentos;