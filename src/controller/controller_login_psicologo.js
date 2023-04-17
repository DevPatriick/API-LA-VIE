const {psicologo} = require('../model/relacao');
const jwt = require('jsonwebtoken');
const secret = require('../config/secret');
const bcrypt = require('bcrypt');

const loginPsicologo = {
      async login(req, res){
        const { email, senha} = req.body;
       
       try {
          const psico = await psicologo.findOne({
               where: {
                    email
               }, });
               if(!psico || !bcrypt.compareSync(senha, psico.senha))
               throw new Error ("Email ou senha inválido");
               const token = jwt.sign({
                    id: psico.id,
                    email: psico.email,
                    nome: psico.nome,
               },
               secret.key
               );
               return res.status(200).json(token);
       } catch (error) {
          return res.status(401).json(error.message)
       }
      }
};

module.exports = loginPsicologo;