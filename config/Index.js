// const mysql = require('mysql2');
// require ('dotenv').config();
// let sql = mysql.createConnection({
//     host: process.env.,
//     user: process.env.ugpmd4qa5bi1cttk,
//     password: process.env.MlXk4jRpFxRjGzvrdY7r,
//     database: process.env.bnneqvvkuk5xozebrtds
// });

// model.exports = sql;

require('dotenv').config();
const {createPool} = require('mysql');
let connection = createPool({
    host: process.env,dbHost,
    user: process.env.dbUser,
    password: process.env.dbPort,
    database: process.env.dbName,
    multipleStatements: true
});
module.exports = connection;
