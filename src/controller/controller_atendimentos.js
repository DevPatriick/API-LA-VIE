const sequelize = require('sequelize');
const  {atendimentos, pacientes, psicologo}  = require('../model/relacao');

const controllerAtendimentos = { 
    
     // GET // buscar todos os atendimentos // 
      async listarAtendimentos(req, res){
      const listarAtendi = await atendimentos.findAll({include: [pacientes]});
      res.json(listarAtendi);
},

    // GET // buscar um atendimento pelo ID //     
      async  listarOneAtendimentos(req, res){
      const { id } = req.params;
       try {
        const buscarAtendimento = await atendimentos.findByPk(id, {include: [pacientes]});
        if(!buscarAtendimento) throw new Error ("Atendimento não encontrado")
         return res.status(200).json(buscarAtendimento);
       } catch (error) {
           res.status(404).json("ID não encontrado")
       }
},



    // POST // cadastrar um atendimento //    

    async cadastraAtendimento(req, res){
        
        const {paciente_id, data_atendimento, observacao, psicologo_id} = req.body;
       try {
           const paciente = await pacientes.findByPk(paciente_id);
           if(!paciente) throw new Error ("Paciente não encontrado");
        const newAtendimento = await atendimentos.create({
            paciente_id,
            data_atendimento,
            observacao,
            psicologo_id
        },  );
        res.status(201).json(newAtendimento);
       } catch (error) {
        res.status(400).json(error.message);
       }
    },
}


module.exports = controllerAtendimentos;