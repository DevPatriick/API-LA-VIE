module.exports = (req, res, next) => {
   console.log(`O ip: ${req.ip} acessou a rota ${req.originalUrl}`);
   res.json("Seja Bem-Vindo(a) a API da La Vie - Saúde Mental");
    next();
};