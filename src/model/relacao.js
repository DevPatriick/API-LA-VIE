const pacientes = require('./pacientes');
const atendimentos = require('./atendimentos');
const psicologo = require('./psicologo');

atendimentos.belongsTo(pacientes, {  // um atendimento tem  um paciente  1:N
    foreignKey: "paciente_id"
});

pacientes.hasMany(atendimentos, {    // um paciente tem varios atendimentos 1:N
    foreignKey: "paciente_id"
});

psicologo.hasMany(atendimentos, {    // um psicologo tem varios atendimentos 1:N
    foreignKey: "psicologo_id"
});

atendimentos.belongsTo(psicologo, {  // um atendimento tem  um psicologo  1:N
    foreignKey: "psicologo_id"
});

module.exports = {
    atendimentos,
    pacientes,
    psicologo
};