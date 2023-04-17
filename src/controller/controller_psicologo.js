const sequelize = require('sequelize');
const {psicologo, atendimentos}  = require('../model/relacao');

const controllerPsicologos = { 
    
     // GET // buscar todos os psicologos // 
      async listarPsicologos(req, res){
      const listarPsicologo = await psicologo.findAll({attributes: {exclude: ['senha']}});
      res.json(listarPsicologo);
},

    // GET // buscar um psicologo pelo ID //      
      async  listarOnePsicologo(req, res){
      const {id} = req.params;
    
        try {
            const psicologos = await psicologo.findByPk(id, {attributes: {exclude: ['senha']}})
            if(!psicologos) throw new Error ("Psicologo não encontrado")
             res.status(200).json(psicologos)
         } catch (error) {
            res.status(404).json(error.message);
        } 
},


    // DELETE // deletar um psicologo // ajustar quando o id nao é encontrado

    async deletarPsicologo(req, res){
        
        const { id } = req.params;
         try {
            const apagar = await psicologo.findByPk(id)
            if(!apagar) throw new Error ("Psicólog não encontrado")
            await psicologo.destroy({
                where: {
                    id
                }
            });
             res.json("Psicólogo excluído com sucesso")
         } catch (error) {
            res.status(404).json(error.message);
         }
        
       
    },


    // PUT // atualizar um psicologo

    async atualizarPsicologo(req, res){

        const { id }  = req.params;
        const { nome, email, senha, apresentacao} = req.body;
        
        
try {
    const psicologoAtualizado = await psicologo.findByPk(id)
    if(!psicologoAtualizado) throw new Error ("Psicólogo não encontrado")
    psicologoAtualizado.update(
        {
            nome,
            email,
            senha,
            apresentacao
    }, 
       
);
   return res.status(200).json(psicologoAtualizado)
}
      catch (error) {
    res.status(400).json('Erro na requisição')
}
       
}}


module.exports = controllerPsicologos;