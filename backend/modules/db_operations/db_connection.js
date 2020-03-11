const mysql = require('mysql');
const db_cofig = require('./db_config.js');

let pool = mysql.createPool(db_cofig);

pool.getConnection(function (err, connection) {
    if (err === null) {
        console.log("Datasbase started at Port: " + connection.config.port);
    } else {
        console.log("There was an Error woth the Databse");
        console.log(err);
        throw err;
    }
});

pool.on('error', function (err) {
    console.log(err.code);
});

module.exports = pool;
