// CONEXAO COM O BANCO DE DADOS

const DB_NAME = 'lavieapi';
const DB_USER = 'root';
const DB_PASS = '';
const DB_CONFIG = {
    dialect: 'mysql',
    port: 3306,
    host: 'localhost'
}

module.exports = { DB_NAME, DB_USER, DB_PASS, DB_CONFIG};