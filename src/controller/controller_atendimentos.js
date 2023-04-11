const sequelize = require('sequelize');
const  {atendimentos, pacientes}  = require('../model/relacao');

const controllerAtendimentos = { 
    
     // GET // buscar todos os atendimentos // 
      async listarAtendimentos(req, res){
      const listarAtendi = await atendimentos.findAll({include: pacientes});
      res.json(listarAtendi);
},

    // GET // buscar um atendimento pelo ID //      AJUSTAR // AJUSTAR // MOSTRA A SENHA E ARRAY VAZIO NO ID NAO ENCONTRADO
      async  listarOneAtendimentos(req, res){
      const { id } = req.params;
       try {
        const buscarAtendimento = await atendimentos.findAll({
            where: {
                id
            }, });
            res.status(200).json(buscarAtendimento)
       } catch (error) {
           res.status(404).json('ID não encontrado!')
       }
},



    // POST // cadastrar um atendimento //    

    async cadastraAtendimento(req, res){
        const {paciente_id, data_atendimento, observacao} = req.body;

       try {

        const newAtendimento = await atendimentos.create({
            paciente_id,
            data_atendimento,
            observacao
        },  );
        res.status(201).json(newAtendimento);
       } catch (error) {
        res.status(400).json('Erro na requisição ou ID não cadastrado');
       }
    },
}


module.exports = controllerAtendimentos;