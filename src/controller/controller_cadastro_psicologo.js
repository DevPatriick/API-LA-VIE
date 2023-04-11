const bcrypt = require('bcrypt');
const {psicologo} = require("../model/relacao");

const psicologoController = {
         async cadastrarPsicologo(req, res){
            const {nome, email, senha, apresentacao} = req.body;
            const newPass = bcrypt.hashSync(req.body.senha, 10)
            const newUser = await psicologo.create({
                nome: req.body.nome,
                email: req.body.email,
                senha: newPass,
                apresentacao: req.body.apresentacao
             })
            return res.status(201).json(newUser);
         }
}

module.exports = psicologoController;