const  express = require('express');
const router = express();
const db = require('./db_connection.js');

router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type')
});

exports.dbInsert = async function dbInsert(firstName, lastName, username, password) {
    console.log('database insert');
    new Promise((resolve, reject) => {
        try {
            //TODO Insert UUID and timestamp
            console.log(firstName, lastName, username, password);
            db.query(
                `INSERT INTO PROJEKTWOCHE_GRUNDSCHULE.USER SET firstName = ?, lastName = ?, username = ?, password = ?`,
                [firstName, lastName, username, password],
                resolve("success")
            );
        } catch {
            reject("error")
        }
    })
};
