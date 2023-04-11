const {psicologo} = require('../model/relacao');
const jwt = require('jsonwebtoken');
const secret = require('../config/secret')
const bcrypt = require('bcrypt');

const loginPsicologo = {
      async login(req, res){
        const { email, senha} = req.body;
        const psico = await psicologo.findOne({
            where: {
                 email
            }, });
           if(!psico){
            return res.status(400).json("Email não cadastrado!")
           }

           if(!bcrypt.compareSync(senha, psicologo.senha)){
            return res.status(401).json("Senha invalida!")
           } 

           const token = jwt.sign({
            id: psicologo.id,
            email: psicologo.email,
            nome: psicologo.nome
           }, 
           secret.key
           );

            return res.json(token);
           }
};

module.exports = loginPsicologo;