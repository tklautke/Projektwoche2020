const mysql = require('mysql');
const config = require('./config');

var pool = mysql.createPool(config);

pool.getConnection((err, connection) => {
    if (err === null) {
        console.log("Database connected at Port: ", connection.config.port);
    } else {
        console.log("Database failed");
        console.log(err);
        throw err;
    }
});

pool.on("error", (err => {
    console.log(err)
}));

module.exports = pool;
