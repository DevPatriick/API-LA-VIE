const sequelize = require('sequelize');
const {psicologo}  = require('../model/relacao');

const controllerPsicologos = { 
    
     // GET // buscar todos os psicologos // 
      async listarPsicologos(req, res){
      const listarPsicologo = await psicologo.findAll();
      res.json(listarPsicologo);
},

    // GET // buscar um psicologo pelo ID //      AJUSTAR // AJUSTAR // MOSTRA A SENHA E ARRAY VAZIO NO ID NAO ENCONTRADO
      async  listarOnePsicologo(req, res){
      const {id} = req.params;
    
        try {
            const psicologos = await psicologo.findAll({
                where: {
                    id
                },
            });
             res.json(psicologos)}
           catch (error) {
            res.status(404).json('ID não encontrado');
        } 
},


    // DELETE // deletar um psicologo // ajustar quando o id nao é encontrado

    async deletarPsicologo(req, res){
        
        const { id } = req.params;
        await psicologo.destroy({
            where: {
                id
            }
        });
        res.status(404).json('Psicólogo excluido com sucesso!');
    },


    // PUT // atualizar um psicologo

    async atualizarPsicologo(req, res){

        const { id }  = req.params;
        const { nome, email, senha, apresentacao} = req.body;
        
        
try {
    const psicologoAtualizado = await psicologo.update(
        {
            nome,
            email,
            senha,
            apresentacao
    }, {
        where: {
            id
        }
    });
    res.json({'nome': nome , 'email': email, "senha":senha, 'apresentação': apresentacao});
}
      catch (error) {
    res.status(400).json('Erro na requisição')
}
       
}}


module.exports = controllerPsicologos;