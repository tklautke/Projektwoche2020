const  express = require('express');
const router = express();
const db = require('./db_connection.js');

router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type')
});

exports.dbSelect = async function dbSelect(username, password) {
    console.log('database select');
    new Promise((resolve, reject) => {
        try {
            console.log(username, password);
            db.query(
                `SELECT * FROM PROJEKTWOCHE_GRUNDSCHULE.USER`,
                function(err, result, fields){
                    console.log(result);
                },
                resolve("success")
            );
        } catch {
            reject("error")
        }
    })
};
