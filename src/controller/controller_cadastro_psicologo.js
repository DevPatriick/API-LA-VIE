const bcrypt = require('bcrypt');
const {psicologo} = require("../model/relacao");

const psicologoController = {
         async cadastrarPsicologo(req, res){
            const {nome, email, senha, apresentacao} = req.body;
           
            try {
               const psico = await psicologo.findOne({
                   where: {email},
               });
               if(psico) throw new Error ("Email já cadastrado")
               const pass = bcrypt.hashSync(senha, 10);
               const novoPsico = await psicologo.create({
                  nome,
                  email,
                  senha: pass,
                  apresentacao
               });
               return res.status(201).json(novoPsico)
            } catch (error) {
               return res.status(401).json(error.message);
            }
            
         }
}

module.exports = psicologoController;