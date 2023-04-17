const sequelize = require('sequelize');
const  {pacientes, atendimentos}  = require('../model/relacao');

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
          const paciente = await pacientes.findByPk(id);
          if(!paciente) throw new Error ("Paciente não encontrado")
          res.status(200).json(paciente)
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
        try {
            const paciente = await pacientes.findByPk(id)
            if(!paciente) throw new Error ("Paciente não encontrado")
            await pacientes.destroy({
                where: {id}
            });
            res.json("Paciente excluido com sucesso")
        } catch (error) {
            return res.status(404).json(error.message)
        }
    },


    // PUT // atualizar um paciente

    async atualizarPaciente(req, res){

        const { id }  = req.params;
        const { nome, email, idade} = req.body;
        
        
try {
    const pacienteAtualizado = await pacientes.findByPk(id);
    if(!pacienteAtualizado) throw new Error("Paciente não encontrado")
    pacienteAtualizado.update({
            nome,
            email,
            idade
    })
       
    res.status(200).json(pacienteAtualizado)}
      catch (error) {
   res.status(400).json('Erro na requisição ou email já cadastrado')
}
       
}}


module.exports = controllerPacientes;