const secret = require('../config/secret');
const  expressJWT  = require('express-jwt')

function jwt() {
    expressJWT({
        secret: secret.key,
        algorithms: ['HS256'],
    })
};

module.exports = jwt;