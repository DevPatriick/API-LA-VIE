const  sequelize  = require('sequelize');
 const {  DB_NAME, DB_USER, DB_PASS, DB_CONFIG} = require('../dbconexao');


try {
      db = new sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
    console.log("Conexão com o banco de dados bem sucedida!");
} catch (error) {
    console.error("Falha ao se conectar com o banco de dados", error);
}

async function conection(){
    try {
        await db.sync();
        console.log(`Banco de dados conectado ${DB_NAME}`);
    } catch (error) {
        console.error("Erro de conexão");
    }
}

Object.assign(db, {
    conection
})

module.exports = db;