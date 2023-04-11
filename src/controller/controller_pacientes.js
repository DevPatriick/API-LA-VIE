const sequelize = require('sequelize');
const  {pacientes}  = require('../model/relacao');

const controllerPacientes = { 
    
     // GET // buscar todos os psicologos // 
      async listarPacientes(req, res){
      const listarPacientes = await pacientes.findAll();
      res.json(listarPacientes);
},

    // GET // buscar um paciente pelo ID //      AJUSTAR // AJUSTAR // MOSTRA A SENHA E ARRAY VAZIO NO ID NAO ENCONTRADO
      async  listarOnePaciente(req, res){
      const { id } = req.params;
       try {
        const buscarPaciente = await pacientes.findAll({
            where: {
                id
            }, });
            res.status(200).json(buscarPaciente)
       } catch (error) {
           res.status(404).json('ID não encontrado!')
       }
},



    // POST // cadastrar um paciente //    

    async cadastraPacientes(req, res){
        const {nome, email, idade} = req.body;

       try {

        const newPaciente = await pacientes.create({
            nome,
            email,
            idade
        },  );
        res.status(201).json(newPaciente);
       } catch (error) {
        res.status(400).json('Erro na requisição paciente ou email já cadastrado');
       }
    },

    // DELETE // deletar um paciente // ajustar quando o id nao é encontrado

    async deletarPacientes(req, res){
        
        const { id } = req.params;
        await pacientes.destroy({
            where: {
                id
            }
        });
        res.status(404).json('Paciente excluido com sucesso!');
    },


    // PUT // atualizar um paciente

    async atualizarPaciente(req, res){

        const { id }  = req.params;
        const { nome, email, idade} = req.body;
        
        
try {
    const pacienteAtualizado = await pacientes.update(
        {
            nome,
            email,
            idade
    }, {
        where: {
            id
        }
    });
    res.json({'nome': nome , 'email': email, "idade":idade});
}
      catch (error) {
    res.status(400).json('Erro na requisição')
}
       
}}


module.exports = controllerPacientes;