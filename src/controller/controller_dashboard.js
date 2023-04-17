const {psicologo, atendimentos, pacientes} = require ("../model/relacao");

const dashboard = {

    async numeroDePsicologos (req, res) {
        const numeroDepsicologo = await psicologo.findAndCountAll();
        return res.json(`Total de psicologo cadastrados : ${numeroDepsicologo.count}`);
    },
    
    async numeroDepacientes (req, res) {
        const numeroDepacientes = await pacientes.findAndCountAll();
        return res.json(`Total de pacientes cadastrados: ${numeroDepacientes.count}`);
    },

    async numeroDeatendimentos (req, res) {
        const numeroDeatendimentos = await atendimentos.findAndCountAll();
        return res.json(`Total de atendimentos cadastrados: ${numeroDeatendimentos.count}`);
    },

    async mediaatendimentospsicologo (req, res) {
        const numeroDeatendimentos = await atendimentos.findAndCountAll();
        const numeroDepsicologo = await psicologo.findAndCountAll();
        return res.json(`A média de atendimentos por psicologo é: ${numeroDeatendimentos.count / numeroDepsicologo.count}`);
    }   
    
};

module.exports = dashboard;