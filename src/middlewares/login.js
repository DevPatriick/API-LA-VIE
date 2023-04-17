const jwt = require("jsonwebtoken");
const {expressJWT} = require("./auth")

module.exports =  async (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1]
        if(!token){return res.status(400).json("Token não enviado")}
        const decode = await  jwt.verify(token, "lavie-grupo4")
        req.psicologo =  decode;
        next()
   
}

