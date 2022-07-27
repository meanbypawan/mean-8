const path = require('path');
const mysql = require('mysql');
let envPath = path.join(__dirname,'../','/.env');

let env = require('dotenv').config({path:envPath});

module.exports = mysql.createPool({
    connectionLimit: 100,
    host: env.parsed.HOST,
    user: env.parsed.USER,
    password: env.parsed.PASSWORD,
    database: env.parsed.DATABASENAME
});