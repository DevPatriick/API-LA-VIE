const express = require('express')
const routes = express .Router();
const controllerPsicologo = require('../controller/controller_psicologo');
const controllerPacientes = require('../controller/controller_pacientes');
const cadastroPsicologo = require('../controller/controller_cadastro_psicologo');
const controllerAtendimentos = require('../controller/controller_atendimentos');
const loginPsicologo = require('../controller/controller_login_psicologo');



// CRUD LOGIN

routes.post('/dashboard/psicologos/login', loginPsicologo.login)           //Login  psicologo



// CRUD PSICOLOGOS

routes.get('/dashboard/psicologos', controllerPsicologo.listarPsicologos)         //Buscar todos os psicologos
routes.get('/dashboard/psicologos/:id', controllerPsicologo.listarOnePsicologo)   //Buscar um psicologo
routes.post('/dashboard/psicologos', cadastroPsicologo.cadastrarPsicologo)      //Cadastrar um psicologo
routes.put('/dashboard/psicologos/:id', controllerPsicologo.atualizarPsicologo)     //Atualizar um psicologo
routes.delete('/dashboard/psicologos/:id', controllerPsicologo.deletarPsicologo)    //Deletar um psicologo

// CRUD PACIENTES

routes.get('/dashboard/pacientes', controllerPacientes.listarPacientes)            //Buscar todos os pacientes
routes.get('/dashboard/pacientes/:id', controllerPacientes.listarOnePaciente)        //Buscar um paciente
routes.post('/dashboard/pacientes', controllerPacientes.cadastraPacientes)           //Cadastrar um paciente
routes.put('/dashboard/pacientes/:id', controllerPacientes.atualizarPaciente)        //Atualizar um paciente
routes.delete('/dashboard/pacientes/:id', controllerPacientes.deletarPacientes)     //Deletar um paciente

// CRUD ATENDIMENTO

routes.get('/dashboard/atendimentos', controllerAtendimentos.listarAtendimentos)            //Buscar todos os atendimentos
routes.get('/dashboard/atendimentos/:id', controllerAtendimentos.listarOneAtendimentos)        //Buscar um atendimento
routes.post('/dashboard/atendimentos', controllerAtendimentos.cadastraAtendimento)           //Cadastrar um atendimento

module.exports = routes;