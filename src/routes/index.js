const express = require('express')
const routes = express .Router();

// CONTROLLERS

const controllerPsicologo = require('../controller/controller_psicologo');
const controllerPacientes = require('../controller/controller_pacientes');
const cadastroPsicologo = require('../controller/controller_cadastro_psicologo');
const controllerAtendimentos = require('../controller/controller_atendimentos');
const loginPsicologo = require('../controller/controller_login_psicologo');
const dashboard = require("../controller/controller_dashboard");



// VALIDAÇÕES 

const login = require("../validation/login/validation_login")
const createValidation = require("../validation/atendimentos/create")
const {createValidationPacientes, updateValidationPacientes, deleteValidationPacientes} = require("../validation/pacientes/index");
const { createValidationPsicologos,  updateValidationPsicologos,  deleteValidationPsicologos} = require("../validation/psicologos/index")
const tokens = require("../middlewares/login");


// CRUD LOGIN

routes.post('/psicologos/login', login,  loginPsicologo.login)                                         //Login  psicologo



// CRUD PSICOLOGOS
 
routes.get('/psicologos', controllerPsicologo.listarPsicologos)                                      //Buscar todos os psicologos
routes.get('/psicologos/:id', controllerPsicologo.listarOnePsicologo)                                //Buscar um psicologo
routes.post('/psicologos', createValidationPsicologos, cadastroPsicologo.cadastrarPsicologo)         //Cadastrar um psicologo
routes.put('/psicologos/:id',updateValidationPsicologos,  controllerPsicologo.atualizarPsicologo)    //Atualizar um psicologo
routes.delete('/psicologos/:id',deleteValidationPsicologos, controllerPsicologo.deletarPsicologo)    //Deletar um psicologo

// CRUD PACIENTES

routes.get('/pacientes', controllerPacientes.listarPacientes)                                        //Buscar todos os pacientes
routes.get('/pacientes/:id', controllerPacientes.listarOnePaciente)                                  //Buscar um paciente
routes.post('/pacientes', createValidationPacientes,controllerPacientes.cadastraPacientes)           //Cadastrar um paciente
routes.put('/pacientes/:id', updateValidationPacientes,  controllerPacientes.atualizarPaciente)        //Atualizar um paciente
routes.delete('/pacientes/:id',deleteValidationPacientes, controllerPacientes.deletarPacientes)      //Deletar um paciente

// CRUD ATENDIMENTO

routes.get('/atendimentos', controllerAtendimentos.listarAtendimentos)                               //Buscar todos os atendimentos
routes.get('/atendimentos/:id', controllerAtendimentos.listarOneAtendimentos)                        //Buscar um atendimento
routes.post('/atendimentos', tokens, createValidation, controllerAtendimentos.cadastraAtendimento)            //Cadastrar um atendimento

// DASHBOARD 

routes.get("/dashboard/numero-pacientes", dashboard.numeroDepacientes)
routes.get("/dashboard/numero-atendimentos",dashboard.numeroDeatendimentos)
routes.get("/dashboard/numero-psicologos",dashboard.numeroDePsicologos)
routes.get("/dashboard/media-atendimentos-psicologos",dashboard.mediaatendimentospsicologo)



module.exports = routes;